const express = require('express');
const multer = require('multer');
const OSS = require('ali-oss');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Konfigurasi OSS
const client = new OSS({
  region: 'YOUR_REGION',
  accessKeyId: 'YOUR_KEY',
  accessKeySecret: 'YOUR_SECRET',
  bucket: 'YOUR_BUCKET'
});

// Domain custom Anda
const CUSTOM_DOMAIN = 'YOUR_CUSTOM_DOMAIN';

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Generate nama file langsung di root bucket (tanpa folder)
    const filename = `${Date.now()}${path.extname(req.file.originalname)}`;
    
    await client.put(filename, req.file.buffer, {
      headers: {
        'Content-Type': req.file.mimetype
      }
    });

    // URL akan menjadi: https://cdn.domain-anda.com/filename
    res.json({
      success: true,
      url: `${CUSTOM_DOMAIN}/${filename}`
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log('Server ready on http://localhost:3001'));
