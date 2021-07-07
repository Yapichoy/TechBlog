var express = require('express');
var router = express.Router();
var postController = require('../controllers/api/PostController');

router.get('/getPosts', postController.getPosts)

module.exports = router;