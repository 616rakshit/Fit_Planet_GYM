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
  const reader = stream.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  let body;
  try {
    let raw = req.body;
    if (raw === undefined || raw === null || (typeof raw === 'object' && Object.keys(raw).length === 0)) {
      raw = await getRawBody(req);
    }
    if (raw === undefined || raw === null) raw = '';
    if (typeof raw === 'string' && !raw.trim()) {
      body = {};
    } else {
      body = typeof raw === 'string' ? JSON.parse(raw) : raw || {};
    }
  } catch (e) {
    return res.status(400).json({ success: false, error: 'Invalid JSON' });
  }

  const trim = (v) => (v == null ? '' : String(v).trim());
  const name = trim(body.name);
  const phone = trim(body.phone);
  const email = trim(body.email);
  const plan = trim(body.plan);
  const message = trim(body.message || '');

  if (!name) return res.status(400).json({ success: false, error: 'Name is required' });
  if (!phone) return res.status(400).json({ success: false, error: 'Phone is required' });
  if (!email) return res.status(400).json({ success: false, error: 'Email is required' });
  if (!plan) return res.status(400).json({ success: false, error: 'Please select a plan' });

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
      const result = await get(BLOB_PATHNAME, { access: 'private' });
      if (result && result.stream) {
        const text = await readStreamToText(result.stream);
        if (text) {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) list = parsed;
        }
      }
    } catch (e) {
      // No blob yet or read error: start fresh
      list = [];
    }

    list.push(entry);

    await put(BLOB_PATHNAME, JSON.stringify(list, null, 2), {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('submit_enquiry error', err);
    const message = err && err.message ? err.message : 'Failed to save enquiry';
    return res.status(500).json({
      success: false,
      error: process.env.BLOB_READ_WRITE_TOKEN ? message : 'Blob storage not configured. Add a Blob store in Vercel project settings.',
    });
  }
};
