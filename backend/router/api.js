var express = require('express');
var router = express.Router();
var postController = require('../controllers/api/PostController');

router.get('/getPosts', postController.getPosts)
router.get('/getPost/:id', postController.getPost)

module.exports = router;