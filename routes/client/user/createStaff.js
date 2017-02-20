var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'user/createStaff',

        language: 'en',
        lang: require('./lang/en/createStaff')
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/createStaff');
    }

    res.render('client/user/createStaff', data);
});

router.post('/', function (req, res, next) {
    // 这里写数据页面 POST 数据过来时要处理的逻辑
    console.log('Post Create Staff!');
    res.redirect('accounts');
});

module.exports = router;
