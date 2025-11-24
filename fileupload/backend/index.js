
// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRoutes from './routes/uploadRoutes.js';
import connectDB from './config/db.js';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'D:\\uploads';

// Ensure upload dir exists (attempt to create if permission allows)
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// CORS: allow frontend origin
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || '*'
}));

// JSON parsing (for any JSON endpoints)
app.use(express.json());

// serve uploaded files statically from /uploads route
app.use('/uploads', express.static(UPLOAD_DIR));

// API routes
app.use('/api', uploadRoutes);

// simple health-check
app.get('/', (req, res) => res.send('File upload ESM server running'));

// Connect DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Serving uploads from ${UPLOAD_DIR} at /uploads`);
    });
  })
  .catch(err => {
    console.error('Failed to start server due to DB connection error:', err);
  });
