const multer = require('multer');

// Set up Multer storage
const storage = multer.memoryStorage(); // Use memory storage for simplicity

// Set up Multer configuration
const multerConfig = {
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
    },
};

// Create Multer middleware
const uploadMiddleware = multer(multerConfig).single('image');

module.exports = uploadMiddleware;