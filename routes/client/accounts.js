var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'clientaccounts',
        title: 'Clent Account',
        language: 'en',
        lang: require('./lang/en/accounts')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/accounts');
    } else {
        data.language = 'en';
        data.lang = require('./lang/en/accounts');
    }

    res.render('client/accounts', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
});

module.exports = router;