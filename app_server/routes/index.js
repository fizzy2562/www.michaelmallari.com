var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* Get home page. */
router.get('/', ctrlMain.home);

/* Get design page. */
router.get('/design', ctrlMain.design);

module.exports = router;
