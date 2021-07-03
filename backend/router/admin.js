var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index')
})
router.get('/users', (req, res) => {
    res.render('admin/users')
})
router.get('/users/add', (req, res) => {
    res.render('admin/users_add')
})
router.get('/users/edit', (req, res) => {
    res.render('admin/users_edit')
})

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