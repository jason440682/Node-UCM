var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  // 这个 data 是要渲染到 Jade 模板的基本的数据
  var data = {
    // key 对应的是模板
    key: 'user/createStaff',
    title: 'Create Staff User'
  };

  if (req.lang && req.lang == 'zh-cn') {
    data.language = 'zh-cn';
    data.lang = require('./lang/zh-cn/createStaff');
  } else {
    data.language = 'en';
    data.lang = require('./lang/en/createStaff');
  }

  res.render('users/create', data);
});

router.post('/', function (req, res, next) {
  // 这里写数据页面 POST 数据过来时要处理的逻辑
});

module.exports = router;
