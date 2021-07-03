var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Index page')
});

module.exports = router;