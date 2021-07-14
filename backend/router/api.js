var express = require('express');
var router = express.Router();
var postController = require('../controllers/api/PostController');
var apiController = require('../controllers/api/ApiController');

router.get('/getPosts', (req, res) => {
    postController.getPosts(req, res)
});
router.get('/getPost/:id', (req, res) => {
    postController.getPost(req, res)
});

router.get('/routes', (req, res) => {
    apiController.routes(req, res)
});

module.exports = router;