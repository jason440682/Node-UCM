var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'billingPayment/createInvoice',
    title: 'Create New Invoice',
    lang: require('./lang/en/createInvoice'),
    language: 'en',
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.lang = require('./lang/zh-cn/createInvoice');
    data.language = 'zh-cn';
  }

  res.render('client/billingPayment/createInvoice', data);
});

router.post('/', function (req, res, next) {
  //表单处理请求
});

module.exports = router;
