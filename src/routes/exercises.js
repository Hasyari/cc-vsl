const exercisesController = require('../controller/exercisesController');
const express = require('express');
const {uploadFile} = require('../middleware/multerMiddleware');


const router = express.Router();


router.get('/', exercisesController.getPredictSign);
router.post('/predict', uploadFile, exercisesController.postPredictSign);

module.exports = router;
