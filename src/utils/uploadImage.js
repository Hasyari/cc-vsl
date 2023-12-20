const {Storage} = require('@google-cloud/storage');
const {v4: uuidv4} = require('uuid');
// const config = require('../config/config.json');
const path = require('path');
const keyFilename = path.join(__dirname, '..', 'config', 'credentials.json');
const storage = new Storage({
  keyFilename: keyFilename,
});

const uploadImage = async (file, bucketName) => {
  const fileExtension = file.originalname.split('.').pop();
  const bucket = storage.bucket(bucketName);
  const storageFileName = `${uuidv4()}.${fileExtension}`;
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
          const publicUrl = `https://storage.googleapis.com/${bucketName}/${storageFileName}`;
          resolve({success: true, error: null, url: publicUrl});
        });
  });
};

module.exports = uploadImage;
