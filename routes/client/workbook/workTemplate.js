var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'workbook/workTemplate',

        language: 'en',
        lang: require('./lang/en/workTemplate'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/workTemplate');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/workbook/workTemplate', data);
});

router.post('/', function (req, res, next) {
    //表单处理逻辑
});

module.exports = router;
