const uploadImage = require('../utils/uploadImage');

const getPredictSign = async (req, res) => {
  res.status(200).json({
    'message': 'Ini merupakan index',
    'success': true,
  });
};

const postPredictSign = async (req, res) => {
  try {
    const file = req.file;
    const uploadedImage = await uploadImage(file, 'vsl-cloud-bucket');

    if (!uploadedImage.success) {
      console.error('Error uploading image:', uploadedImage.error);
      return res.status(500).json({error: 'Error uploading image'});
    }
    console.log('Image uploaded successfully. URL:', uploadedImage.url);
    res.status(201).json({message: 'News created successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal Server Error'});
  }
};


module.exports = {
  getPredictSign,
  postPredictSign,
};
