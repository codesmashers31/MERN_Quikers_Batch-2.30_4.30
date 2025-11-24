// controllers/uploadController.js
import path from 'path';
import Upload from '../models/Upload.js';

export const handleSingleUpload = async (req, res) => {
  try {
    // multer put file on req.file
    const file = req.file;
    const { name, address } = req.body;

    if (!file) return res.status(400).json({ success: false, message: 'No file uploaded' });
    if (!name || !address) return res.status(400).json({ success: false, message: 'Name and address required' });

    // build file URL to be consumed by frontend
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${encodeURIComponent(path.basename(file.path))}`;

    // persist the record in MongoDB
    const record = await Upload.create({
      name,
      address,
      filename: path.basename(file.path),
      originalname: file.originalname,
      mime: file.mimetype,
      size: file.size,
      url: fileUrl
    });

    return res.json({ success: true, data: record });
  } catch (err) {
    console.error('handleSingleUpload error:', err);
    return res.status(500).json({ success: false, message: err.message || 'Server error' });
  }
};
