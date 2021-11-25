var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(process.env.APP_name);
  // console.log(process.env);
});

router.get('/me', (req, res, next) => {
  res.send('Hi nama saya febri');
})

module.exports = router;
