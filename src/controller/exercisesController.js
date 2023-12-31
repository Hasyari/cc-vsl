require('dotenv').config();

const axios = require('axios');

const getPredictSign = async (req, res) => {
  res.status(200).json({
    'message': 'Ini merupakan index',
    'success': true,
  });
};

const postPredictSign = async (req, res) => {
  try {
    const apiUrl = process.env.MODEL_APP_API;
    const formData = new FormData();
    const fileBlob = new Blob([req.file.buffer], {type: req.file.mimetype});

    formData.append('file', fileBlob, req.file.originalname);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error forwarding file:', error.response?.data || error.message);

    if (error.response) {
      res.status(error.response.status).json({error: error.response.data});
    } else {
      res.status(500).json({error: 'File forwarding failed'});
    }
  }
};


module.exports = {
  getPredictSign,
  postPredictSign,
};
