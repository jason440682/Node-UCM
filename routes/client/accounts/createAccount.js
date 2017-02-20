var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
    var data = {
        key: 'accounts/createAccount',

        language: 'en',
        lang: require('./lang/en/createAccount'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/createAccount');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }
    res.render('client/accounts/createAccount', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
