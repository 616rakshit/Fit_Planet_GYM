const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const ENQUIRY_FILE = path.join(__dirname, 'enquiries.txt');

app.post('/api/enquiry', (req, res) => {
  const { name, phone, email, plan, message } = req.body || {};

  if (!name || !phone || !email || !plan) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  const line = `[${new Date().toISOString()}] Name: ${name} | Phone: ${phone} | Email: ${email} | Plan: ${plan} | Message: ${message || ''}\n`;

  fs.appendFile(ENQUIRY_FILE, line, (err) => {
    if (err) {
      console.error('Failed to write enquiry:', err);
      return res.status(500).json({ success: false, error: 'Failed to save enquiry' });
    }

    return res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Enquiry server running on http://localhost:${PORT}`);
});

