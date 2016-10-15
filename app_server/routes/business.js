var express = require('express');
var router = express.Router();
var ctrlBusiness = require('../controllers/business');

// GET Business landing page. - http://www.michaelmallari.com/business
router.get('/', ctrlBusiness.index);

module.exports = router;
