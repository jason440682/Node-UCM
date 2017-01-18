var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/register', data);
});

router.get('/en', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/register', data);
});

router.get('/zh', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'zh-CN',
        lang: require('./lang/zh')
    };

    res.render('users/register', data);
});

module.exports = router;
