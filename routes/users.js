var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hallo Word');
});

router.get('/me', (req, res, next) => {
  res.send('Hi nama saya febri');
})

module.exports = router;
