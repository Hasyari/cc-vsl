const modulesController = require('../controller/modulesController');
const express = require('express');

const router = express.Router();


router.get('/', modulesController.getModulesAll);
router.get('/:data', modulesController.getSeparateAlphabet);
router.get('/detail/:alpha', modulesController.getDetailAlphabet);


// not used production
router.post('/', modulesController.postBulkDataAlphabet);

module.exports = router;
