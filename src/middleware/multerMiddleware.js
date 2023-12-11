const multer = require('multer');

const storage = multer.memoryStorage();


const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['jpeg', 'jpg', 'png'];
  const fileExtension = file.originalname.split('.').pop().toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Only jpeg, jpg, and png files are allowed!'), false);
  }
};

const multerConfig = {
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
  fileFilter: fileFilter,
};

const uploadFile = multer(multerConfig).single('image');

module.exports = {
  uploadFile,
};
