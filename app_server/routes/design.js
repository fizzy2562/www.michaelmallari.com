var express = require('express');
var router = express.Router();
var ctrlDesign = require('../controllers/design');

// GET Design landing page - http://www.michaelmallari.com/design/
router.get('/', ctrlDesign.index);

module.exports = router;
