var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Get home page. */
router.get('/', ctrlMain.home);

module.exports = router;