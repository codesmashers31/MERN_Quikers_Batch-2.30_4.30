// routes/uploadRoutes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleSingleUpload } from '../controllers/uploadController.js';
import dotenv from 'dotenv';
import fs from 'fs';
import Upload from '../models/Upload.js';
dotenv.config();

const router = express.Router();

// get __dirname for ESM if needed (we won't use it for upload storage)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use UPLOAD_DIR from env
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'D:\\uploads';

// Ensure dir exists
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    // simple sanitization + timestamp
    const timestamp = Date.now();
    const safe = file.originalname.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\.-]/g, '');
    cb(null, `${timestamp}-${safe}`);
  }
});

// allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype && file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Only images allowed'), false);
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter
});

// POST /api/upload
router.post('/upload', upload.single('image'), handleSingleUpload);

router.get("/upload", async function (req, res) {
  try {
    const uploads = await Upload.find();
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
