var express = require('express');
var router = express.Router();
var ctrlComputational = require('../controllers/computational');

// GET Computational landing page. - http://www.michaelmallari.com/computational
router.get('/', ctrlComputational.index);

module.exports = router;
