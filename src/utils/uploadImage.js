const {Storage} = require('@google-cloud/storage');
const config = require('../config/config.json');
const path = require('path');
const keyFilename = path.join(__dirname, '..', 'config', 'credentials.json');
const storage = new Storage({
  keyFilename: keyFilename,
});

const uploadImage = async (file) => {
  const fileExtension = file.originalname.split('.').pop();
  const bucket = storage.bucket(config.bucket_name);
  const storageFileName = `${Date.now()}.${fileExtension}`;
  const blob = bucket.file(storageFileName);

  const writeStream = blob.createWriteStream({
    resumable: false,
  });

  return new Promise((resolve, reject) => {
    writeStream.end(file.buffer);

    writeStream
        .on('error', (err) => {
          reject(new Error({success: false, error: err, url: null}));
        })
        .on('finish', () => {
          const publicUrl = `https://storage.googleapis.com/${config.bucket_name}/${storageFileName}`;
          resolve({success: true, error: null, url: publicUrl});
        });
  });
};

module.exports = uploadImage;
