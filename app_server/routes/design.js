var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/design');

/* Get design landing page. */
/* http://www.michaelmallari.com/design/ */
router.get('/', ctrlMain.design);

module.exports = router;
