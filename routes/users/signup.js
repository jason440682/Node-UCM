var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'signup',

        language: 'en',
        lang: require('./lang/en/signup')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/signup');
    }

    res.render('users/signup', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
    console.log('Post Register!');
    if (req.lang && req.lang == 'zh-cn') {
        res.redirect('/cn/client/accounts');
    } else {
        res.redirect('/en/client/accounts');
    }
});

module.exports = router;
