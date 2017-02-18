var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'others/modifyInvoice',
    title: 'View/Modify Invoice',
    lang: require('./lang/en/modifyInvoice'),
    language: 'en',
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.lang = require('./lang/zh-cn/modifyInvoice');
    data.language = 'zh-cn';
  }

  res.render('client/others/modifyInvoice', data);
});

router.post('/', function (req, res, next) {
  //表单处理请求
});

module.exports = router;
