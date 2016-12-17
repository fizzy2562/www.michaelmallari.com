var express = require('express');
var router = express.Router();
var ctrlData = require('../controllers/data');

// GET Data landing page. - http://www.michaelmallari.com/data/
router.get('/', ctrlData.index);

// GET Lottery Take 5 landing page. - http://www.michaelmallari.com/data/lottery-ny-take5/
router.get('/lottery-ny-take5/', ctrlData.take5);

module.exports = router;
