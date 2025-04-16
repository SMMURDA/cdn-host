# OSS Upload Server with Custom Domain

A simple Node.js server for uploading files directly to Alibaba Cloud OSS (Object Storage Service) with a custom domain.

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

## Configuration Frontend

| Parameter         | Description                          |
|-------------------|--------------------------------------|
| `line809`          | Your API Endpoint Backend (e.g., `## Configuration Backend

| Parameter         | Description                          |
|-------------------|--------------------------------------|
| `region`          | Your Endpoint IP Backend (e.g., `http://localhost:3000`) |`) |
