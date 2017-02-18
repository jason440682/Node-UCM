var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'accounts/clientAccounts',
    title: 'Client Account'
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/clientAccounts');
    data.nav = require('../public/lang/en/navbar');
  } else {
    data.language = 'en';
    data.lang = require('./lang/en/clientAccounts');
    data.nav = require('../public/lang/en/navbar');
  }

  res.render('client/accounts/clientAccounts', data);
});

router.post('/', function (req, res, next) {
  // 这里写注册页面 POST 数据过来时要处理的逻辑
});

module.exports = router;
