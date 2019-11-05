var express = require('express');
var router = express.Router();

//暴露接口
router.get('/', (req, res, next) => {
  const { username, password } = req.query;
  console.log(req.query);
  res.render('categorys', {
    categorys: JSON.stringify([
      {
        id: 1001,
        content: '商品一',
        username,
        password
      },
      {
        id: 1002,
        content: '商品二'
      }
    ])
  });
});

//暴露接口
router.post('/', (req, res, next) => {
  const { username, password } = req.body;
  res.render('categorys', {
    categorys: JSON.stringify([
      {
        id: 1003,
        content: '商品三',
        status: 1
      }
    ])
  });
});
module.exports = router;
