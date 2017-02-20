var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'login',

        language: 'en',
        lang: require('./lang/en/login')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/login');
    }

    res.render('users/login', data);
});

router.post('/', function (req, res, next) {
    // 这里写登录页面 POST 数据过来时要处理的逻辑
    console.log('Post login!');
    if (req.lang && req.lang == 'zh-cn') {
        res.redirect('/cn/client/accounts');
    } else {
        res.redirect('/en/client/accounts');
    }
});

module.exports = router;
