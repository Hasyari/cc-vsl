const modulesController = require('../controller/modulesController');
const express = require('express');

const router = express.Router();


router.get('/all', modulesController.getModulesAll);
router.get('/', modulesController.getSeparateAlphabet);

// not used production
router.post('/', modulesController.postBulkDataAlphabet);

module.exports = router;
