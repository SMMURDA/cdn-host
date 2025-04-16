# CDN Host Server with Custom Domain
<div align="center">
  <img src="https://raw.githubusercontent.com/SMMURDA/cdn-host/main/screenshot/result.jpg" alt="Hasil Screenshot" style="max-width: 100%; height: auto;" />
</div>

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![OSS](https://img.shields.io/badge/Aliyun-OSS-blue)
![Security](https://img.shields.io/badge/Security-Hardened-yellow)

A simple Express.js server for uploading files directly to Alibaba Cloud OSS (Object Storage Service) with a custom domain.

## Features

- File uploads to Alibaba Cloud OSS
- Custom domain support
- CORS enabled
- Simple API endpoint
- Memory storage for file processing

## Prerequisites

- Node.js (v14 or later recommended)
- Alibaba Cloud OSS account
- Custom domain configured with your OSS bucket

## Configuration Backend

| Parameter         | Description                          |
|-------------------|--------------------------------------|
| `region`          | Your OSS region (e.g., `oss-us-west-1`) |
| `accessKeyId`     | Your Alibaba Cloud Access Key ID     |
| `accessKeySecret` | Your Alibaba Cloud Access Key Secret |
| `bucket`          | Your OSS bucket name                 |
| `CUSTOM_DOMAIN`   | Your CDN or custom domain            |

## Configuration Backend

| Parameter         | Description                          |
|-------------------|--------------------------------------|
| `line809`          | Your Endpoint IP Backend (e.g., `http://localhost:3000`) |`) |

## Note Backend

   - [ ] Hardcode Configuration
   - [ ] No file size restrictions
   - [ ] No Rate Limit Size

You have to add it yourself for the backend, but in some cases like max upload, valid dangerous files, delay per upload, it has been made in the frontend. but it would be better to add it also in the backend for better security, for example as below.

```javascript
// OSS with .env:
const client = new OSS({
  region: process.env.OSS_REGION, 
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  bucket: process.env.OSS_BUCKET
});

// Valid file upload
const allowedTypes = ['image/jpeg', 'image/png'];
if (!allowedTypes.includes(req.file.mimetype)) {
  return res.status(400).json({ error: 'File type not allowed' });
}

// Max Uploaded (10MB)
const maxSize = 10 * 1024 * 1024;
if (req.file.size > maxSize) {
  return res.status(400).json({ error: 'File too large' });
}
```

