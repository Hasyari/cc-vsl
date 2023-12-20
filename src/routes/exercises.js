const exercisesController = require('../controller/exercisesController');
const express = require('express');
const {uploadFilePredict} = require('../middleware/multerMiddleware');


const router = express.Router();


router.get('/', exercisesController.getPredictSign);
router.post('/predict', uploadFilePredict, exercisesController.postPredictSign);

module.exports = router;
