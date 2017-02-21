var express = require('express');
var router = express.Router();

var data_eg = {
    account: {
        num: '000391',
        type: 'Business'
    }
};

router.use('/', function (req, res, next) {
    var data = {
        key: 'accounts/modifyAccount',

        language: 'en',
        lang: require('./lang/en/modifyAccount'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        account: data_eg.account
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/modifyAccount');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/accounts/modifyAccount', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
