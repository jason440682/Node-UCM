var express = require('express');
var router = express.Router();

router.use('/', function (req, res, next) {
    var data = {
        key: 'notification',
        title: 'Notification Manager',
        language: 'en',
        lang: require('./lang/en/notification'),
        nav: require('../public/lang/en/navbar')
    };

    if (req.lang & req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./zh-cn/lang/notification');
    }
    res.render('client/accounts/notification', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;