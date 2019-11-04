var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('news', { title: '新闻中心' });
 // res.send('news22222222 <a href="/">返回首页</>');
});

module.exports = router;
