var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
    var data = {
        key: 'createaccount',
        title: 'Create Account',
        language: 'en',
        lang: require('./lang/en/createaccount'),
        nav: require('../public/lang/en/navbar')
    };

    if (req.lang & req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./zh-cn/lang/createaccount');
    }
    res.render('client/accounts/createAccount', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;