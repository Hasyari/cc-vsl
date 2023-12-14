const exercisesController = require('../controller/exercisesController');
const express = require('express');

const router = express.Router();


router.get('/', exercisesController.getExercises);
router.post('/photo', exercisesController.postPhotoSign);


module.exports = router;
