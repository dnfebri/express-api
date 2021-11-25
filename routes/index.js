var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', (reg, res) => {
  res.json({
    message:'Hai nama saya kentung'
  })
})

module.exports = router;
