const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const UPLOAD_DIR = path.join(ROOT, 'assets/images/products');

const ALLOWED_FILES = new Set([
  'milan-hype-corefit-tank.jpg',
  'milan-hype-corefit-tank-2.jpg',
  'vale-forever-skittle-sweats.jpg',
  'vale-forever-skittle-sweats-2.jpg',
  'project-gr-layered-sweatpants.jpg',
  'project-gr-layered-sweatpants-2.jpg',
  'project-gr-layered-sweatpants-3.jpg',
  'enfants-riches-deprimes-trashed-hoodie.jpg',
  'enfants-riches-deprimes-trashed-hoodie-2.jpg',
  'enfants-riches-deprimes-trashed-hoodie-3.jpg'
]);

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (req, file, cb) => {
    const name = req.params.filename;
    if (!ALLOWED_FILES.has(name)) {
      return cb(new Error('Filename not allowed'));
    }
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      return cb(new Error('Only JPG, PNG, WebP allowed'));
    }
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.use(express.json());
app.use(express.static(ROOT));

app.get('/api/images', (req, res) => {
  const files = [...ALLOWED_FILES].map((filename) => {
    const full = path.join(UPLOAD_DIR, filename);
    return {
      filename,
      exists: fs.existsSync(full),
      url: `assets/images/products/${filename}`
    };
  });
  res.json(files);
});

app.post('/api/upload/:filename', upload.single('photo'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({
    ok: true,
    filename: req.file.filename,
    url: `assets/images/products/${req.file.filename}?v=${Date.now()}`
  });
});

app.delete('/api/upload/:filename', (req, res) => {
  const name = req.params.filename;
  if (!ALLOWED_FILES.has(name)) return res.status(400).json({ error: 'Not allowed' });
  const full = path.join(UPLOAD_DIR, name);
  if (fs.existsSync(full)) fs.unlinkSync(full);
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message || 'Upload failed' });
});

app.listen(PORT, () => {
  console.log(`\n  Milan Hype website running at http://localhost:${PORT}`);
  console.log(`  Photo upload:  http://localhost:${PORT}/admin.html`);
  console.log(`  Share drops:   http://localhost:${PORT}/share.html\n`);
});
