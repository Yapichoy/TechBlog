var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const userController = require('../controllers/admin/UserController');
const postController = require('../controllers/admin/PostController');
const uploadController = require('../controllers/admin/UploadController');
const urlencodedParser = bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 });

router.get('/', (req, res) => {
    res.render('admin/index')
})

//users
router.get('/users', userController.index)
router.get('/users/add',urlencodedParser, (req, res) => {
    res.render('admin/users_add')
})
router.post('/users/add', urlencodedParser, userController.addPost);

router.get('/users/edit', (req, res) => {
    res.render('admin/users_edit')
})

//post
router.get('/post', postController.index)
router.get('/post/add',urlencodedParser, (req, res) => {
    res.render('admin/post_add')
})
router.post('/post/add', urlencodedParser, postController.addPost);

router.get('/post/edit/:id', (req, res) => {
    postController.editIndex(req, res)
});
router.post('/post/edit',urlencodedParser, postController.edit);

//Upload
router.get('/uploads/', uploadController.index);

router.get('/upload/', uploadController.addIndex);
router.post('/upload/',urlencodedParser, uploadController.add);

//Auth
router.get('/auth', (req, res) => {
    res.render("admin/login");
})

router.get('/forgot_password', (req, res) => {
    res.render("admin/forgot_password");
})

router.get('/recover_password', (req, res) => {
    res.render("admin/recover_password");
})

module.exports = router;