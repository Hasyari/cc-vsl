const express = require('express');
const newsController = require('../controller/newsController')

const router = express.Router();
const multer  = require('multer');


const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
      // no larger than 5mb.
      fileSize: 5 * 1024 * 1024,
    },
    
});

router.post('/', upload.single('image'), newsController.postNewsData);

router.get('/', newsController.getNewsAll);
router.get('/:id', newsController.getNewsSpecified);


module.exports = router;