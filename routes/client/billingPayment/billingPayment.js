var express = require('express');
router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'billingPayment/billingPayment',
    title: 'Invoices & Payment',
    language: 'en',
    lang: require('./lang/en/billingPayment'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.lang = require('./lang/zh-cn/billingPayment');
    data.language = 'zh-cn'
  }

  res.render('client/billingPayment/billingPayment', data);
});

router.post('/', function (req, res, next) {
  //表单处理逻辑
});

module.exports = router;
