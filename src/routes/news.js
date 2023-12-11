const express = require('express');
const newsController = require('../controller/newsController');
const {uploadFile} = require('../middleware/multerMiddleware');


const router = express.Router();

router.post('/', uploadFile, newsController.postNewsData);

router.get('/', newsController.getNewsAll);
router.get('/:id', newsController.getNewsSpecified);


module.exports = router;
