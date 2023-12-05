const express = require('express');
const newsController = require('../controller/newsController')

const router = express.Router();

router.get('/', newsController.getNewsAll);
router.get('/:id', newsController.getNewsSpecified);

module.exports = router;