var express = require('express');
var router = express.Router();
var ctrlPrinciples = require('../controllers/principles');

// GET Principles landing page. - http://www.michaelmallari.com/principles/
router.get('/', ctrlPrinciples.index);

module.exports = router;