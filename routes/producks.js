var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    res.send('ini adalah post');
});

module.exports = router;
