var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const authController = require('../controllers/admin/AuthController');
const urlencodedParser = bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 });

router.get('/', (req, res) => {
    res.render("admin/login");
})
router.post('/login', urlencodedParser, (req, res) => {
    authController.login(req, res);
})

router.get('/forgot_password', (req, res) => {
    res.render("admin/forgot_password");
})

router.get('/recover_password', (req, res) => {
    res.render("admin/recover_password");
})

module.exports = router;