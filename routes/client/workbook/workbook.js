var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'workbook/workbook',
    title: 'Work Book',
    language: 'en',
    lang: require('./lang/en/workbook'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/workbook');
  }

  res.render('client/workbook/workbook', data);
});

router.post('/', function (req, res, next) {
  //表单处理逻辑
});

module.exports = router;
