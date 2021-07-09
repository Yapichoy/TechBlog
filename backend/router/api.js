var express = require('express');
var router = express.Router();
var postController = require('../controllers/api/PostController');

router.get('/getPosts', (req, res) => {
    postController.getPosts(req, res)
});
router.get('/getPost/:id', (req, res) => {
    postController.getPost(req, res)
});

module.exports = router;