var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var data = {
    key: 'workbook/createWork',
    title: 'Create Newsletter/Group Notification',
    language: 'en',
    lang: require('./lang/en/createWork'),
    nav: require('../public/lang/en/navbar')
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/createWork');
  }

  res.render('client/workbook/createWork', data);
});

router.post('/', function (req, res, next) {
  //表单处理逻辑
});

module.exports = router;
