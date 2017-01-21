var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'login',
        title: 'Log In'
    };

    if (req.lang && req.lang == 'zh') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/login');
    } else {
        data.language = 'en';
        data.lang = require('./lang/en/login');
    }

    res.render('users/login', data);
});

router.post('/', function (req, res, next) {
    // 这里写登录页面 POST 数据过来时要处理的逻辑
});

module.exports = router;