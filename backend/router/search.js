var express = require('express');
var router = express.Router();

router.get('/search', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;