var express = require('express');
var router = express.Router();
var ctrlData = require('../controllers/data');

// GET Data landing page. - http://www.michaelmallari.com/computational
router.get('/', ctrlData.index);

module.exports = router;
