var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET Home page - http://www.michaelmallari.com */
router.get('/', ctrlMain.index);

module.exports = router;
