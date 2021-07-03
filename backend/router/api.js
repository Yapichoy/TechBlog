var express = require('express');
var router = express.Router();
var baseController = require('../controllers/api/BaseController');
var searchController = require('../controllers/api/SearchController');

router.get('/connect', baseController.connect)
router.get('/getQuotes', searchController.getQuotes)

module.exports = router;