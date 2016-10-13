var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET Home page - http://www.michaelmallari.com */
router.get('/', ctrlMain.home);

/* GET About page - http://www.michaelmallari.com/about */
router.get('/about', ctrlMain.about);

module.exports = router;
