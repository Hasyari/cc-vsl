const { Storage } = require('@google-cloud/storage');
const config = require("../config/config.json");
const news = require("../models/News")
const path = require('path');

const keyFilename = path.join(__dirname, '..', 'config', 'credentials.json');
const storage = new Storage({ 
    keyFilename: keyFilename
});

const uploadImageToGCS = async (file) => {
    try {
        // Get a reference to the destination bucket and file
        const bucket = storage.bucket(config.bucket_name);
        const storageFileName = `${Date.now()}_${file.originalname}`;
        const blob = bucket.file(storageFileName);

        // Create a write stream to the destination file in Google Cloud Storage
        const writeStream = blob.createWriteStream({
            resumable: false,
        });

        // Pipe the file buffer to the write stream
        writeStream.end(file.buffer);
        
        writeStream
            .on('error', (err) => {
                console.error('Error uploading image:', err);
            })
            .on('finish', () => {
                const publicUrl = `https://storage.googleapis.com/${config.bucket_name}/${storageFileName}`;
                console.log(`Image uploaded to: ${publicUrl}`);
            });

        return { name: file.originalname, publicUrl: `https://storage.googleapis.com/${config.bucket_name}/${storageFileName}` };

    } catch (err) {
        console.error('Error processing upload request:', err);
    }
};

const postNewsData = async (req, res) => {
    try {
        const file = req.file;
        
         // Upload image to GCS
        const uploadedImage = await uploadImageToGCS(file);

        const savedNews = await news.create({
            judul: req.body.judul,
            deskripsi: req.body.deskripsi,
            image_url: uploadedImage.publicUrl,
        })

         // Return success response
        res.json({
            message: 'Image uploaded successfully!',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading image' });
    }
}

const getNewsAll = async (req, res) => {
    try {
        await news.findAll().then((data) => {
            res.json(data);
        })
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error retrieving data');
        return;
    }
};

const getNewsSpecified = async (req, res) => {
    const id = req.params.id;
    const user = await news.findOne({
        where: { id: id, },
    });
    
    if(user) {
        return res.status(200).json({
            data: user,
        });
    } else if (!user) {
        return res.status(404).json({
            message: 'News not found',
        });
    } else {
        console.error('Error executing query:', err);
        res.status(500).json({ message: "Error retrieving data" });
        return;
    }
};

module.exports = {
    postNewsData, 
    getNewsAll,
    getNewsSpecified
}