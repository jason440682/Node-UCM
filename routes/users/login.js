var express = require('express');
var router = express.Router();

var api = require('../plugins/requests');

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
    if (req.body === undefined) {
        return false;
    } else {
        api.test('put', {'firstName': 'GuoGYMing'}, 5).then(function (response) {
            console.log('Success!');
            console.log(response.text);
            res.redirect('/');
            // if (req.lang && req.lang == 'zh-cn') {
            //     res.redirect('/cn/client/accounts');
            // } else {
            //     res.redirect('/en/client/accounts');
            // }
        }, function (err, response) {
            console.log('err');
            console.log(err.status)
            console.log(err.response.error.text)
            res.redirect('/');
        });
    }
});

module.exports = router;
