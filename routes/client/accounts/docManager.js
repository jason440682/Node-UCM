var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'accounts/docManager',
    title: 'Clent Account',
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('././zh-cn/accounts');
  } else {
    data.language = 'en';
    data.lang = require('./lang/en/notification');
  }

  res.render('client/accounts/docManager', data);
});

router.post('/', function (req, res, next) {
  // 这里写注册页面 POST 数据过来时要处理的逻辑
  console.log('post!');
});

module.exports = router;
