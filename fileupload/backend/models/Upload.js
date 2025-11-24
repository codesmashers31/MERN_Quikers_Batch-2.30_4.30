// models/Upload.js
import mongoose from 'mongoose';

const UploadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  filename: { type: String, required: true },       // stored filename on disk
  originalname: { type: String, required: true },   // original uploaded filename
  mime: { type: String },
  size: { type: Number },
  url: { type: String }, // accessible URL (constructed when saved)
}, { timestamps: true });

export default mongoose.model('Upload', UploadSchema);
