var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'signup',
        title: 'Sign UP',
        language: 'en',
        lang: require('./lang/en/register')
    };

    res.render('users/signup', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
});

module.exports = router;