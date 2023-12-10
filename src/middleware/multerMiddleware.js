const multer = require('multer');

const storage = multer.memoryStorage();

const multerConfig = {
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
};

const uploadMiddleware = multer(multerConfig).single('image');

module.exports = uploadMiddleware;
