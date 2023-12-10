const {Storage} = require('@google-cloud/storage');
const config = require('../config/config.json');
const news = require('../models/News');
const path = require('path');
const keyFilename = path.join(__dirname, '..', 'config', 'credentials.json');
const storage = new Storage({
  keyFilename: keyFilename,
});

const uploadImageToGCS = async (file) => {
  const bucket = storage.bucket(config.bucket_name);
  const storageFileName = `${Date.now()}_${file.originalname}`;
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

const postNewsData = async (req, res) => {
  try {
    const file = req.file;

    // Upload image to GCS
    const uploadedImage = await uploadImageToGCS(file);

    if (!uploadedImage.success) {
      console.error('Error uploading image:', uploadedImage.error);
      return res.status(500).json({error: 'Error uploading image'});
    }

    console.log('Image uploaded successfully. URL:', uploadedImage.url);

    const createdNews = await news.create({
      judul: req.body.judul,
      deskripsi: req.body.deskripsi,
      image_url: uploadedImage.url,
    });

    if (createdNews) {
      res.status(201).json({message: 'News created successfully', data: createdNews});
    } else {
      res.status(500).json({error: 'Failed to create news'});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error'});
  }
};

const getNewsAll = async (req, res) => {
  try {
    const data = await news.findAll();
    res.json(data);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error retrieving data');
  }
};

const getNewsSpecified = async (req, res) => {
  const id = req.params.id;
  try {
    const newsItem = await news.findOne({
      where: {id: id},
    });

    if (newsItem) {
      return res.status(200).json({data: newsItem});
    } else {
      return res.status(404).json({message: 'News not found'});
    }
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({message: 'Error retrieving data'});
  }
};

module.exports = {
  postNewsData,
  getNewsAll,
  getNewsSpecified,
};
