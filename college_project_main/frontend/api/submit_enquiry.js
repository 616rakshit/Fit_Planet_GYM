const { get, put } = require('@vercel/blob');

const BLOB_PATHNAME = 'enquiries.json';

async function getRawBody(req) {
  if (typeof req.text === 'function') {
    return await req.text();
  }
  if (typeof req.on === 'function') {
    return new Promise((resolve, reject) => {
      const chunks = [];
      req.on('data', (chunk) => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      req.on('error', reject);
    });
  }
  return '';
}

async function readStreamToText(stream) {
  if (!stream) return '';
  if (typeof stream.getReader !== 'function') {
    return new Promise((resolve, reject) => {
      const chunks = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      stream.on('error', reject);
    });
  }
  const reader = stream.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }
  const buf = Buffer.concat(chunks);
  return typeof buf.toString === 'function' ? buf.toString('utf8') : new TextDecoder().decode(buf);
}

function sendJson(res, status, data) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(status).end(JSON.stringify(data));
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed' });
  }

  let body;
  try {
    let raw = req.body;
    if (raw === undefined || raw === null || (typeof raw === 'object' && !Array.isArray(raw) && Object.keys(raw).length === 0)) {
      raw = await getRawBody(req);
    }
    if (raw === undefined || raw === null) raw = '';
    if (typeof raw === 'string' && !raw.trim()) {
      body = {};
    } else {
      body = typeof raw === 'string' ? JSON.parse(raw) : raw || {};
    }
  } catch (e) {
    return sendJson(res, 400, { success: false, error: 'Invalid JSON' });
  }

  const trim = (v) => (v == null ? '' : String(v).trim());
  const name = trim(body.name);
  const phone = trim(body.phone);
  const email = trim(body.email);
  const plan = trim(body.plan);
  const message = trim(body.message || '');

  if (!name) return sendJson(res, 400, { success: false, error: 'Name is required' });
  if (!phone) return sendJson(res, 400, { success: false, error: 'Phone is required' });
  if (!email) return sendJson(res, 400, { success: false, error: 'Email is required' });
  if (!plan) return sendJson(res, 400, { success: false, error: 'Please select a plan' });

  const entry = {
    timestamp: new Date().toISOString(),
    name,
    phone,
    email,
    plan,
    message,
  };

  try {
    let list = [];
    try {
      const getOpts = { access: 'private' };
      const result = await get(BLOB_PATHNAME, getOpts);
      if (result && (result.stream || result.blob)) {
        const stream = result.stream || result.blob;
        const text = await readStreamToText(stream);
        if (text) {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) list = parsed;
        }
      }
    } catch (e) {
      list = [];
    }

    list.push(entry);
    const bodyStr = JSON.stringify(list, null, 2);

    try {
      await put(BLOB_PATHNAME, bodyStr, {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
    } catch (putErr) {
      await put({
        pathname: BLOB_PATHNAME,
        body: bodyStr,
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
      });
    }

    return sendJson(res, 200, { success: true });
  } catch (err) {
    console.error('submit_enquiry error', err);
    const msg = err && err.message ? err.message : 'Failed to save enquiry';
    const errorMsg = process.env.BLOB_READ_WRITE_TOKEN ? msg : 'Blob storage not configured. Add a Blob store in Vercel project settings.';
    return sendJson(res, 500, { success: false, error: errorMsg });
  }
};
