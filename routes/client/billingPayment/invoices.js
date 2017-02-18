var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'billingPayment/invoices',
    title: 'Invoices',
    language: 'en',
    lang: require('./lang/en/invoices'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/invoices');
  }

  res.render('client/billingPayment/invoices', data);
});

router.post('/', function (req, res, next) {
  //表单处理请求
});

module.exports = router;
