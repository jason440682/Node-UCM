var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
  var data = {
    key: 'accounts/createAccount',
    title: 'Create Account',
    language: 'en',
    lang: require('./lang/en/createAccount'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang & req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/createAccount');
  }
  res.render('client/accounts/createAccount', data);
});

router.post('/', function (req, res, next) {
  //表单post过来的数据处理逻辑
});

module.exports = router;
