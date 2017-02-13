/**
 * 这个页面主要负责主页的展示内容
 */
var express = require('express');
var router = express.Router();

var users = require('./users');
var client = require('./client');

router.get('/', function (req, res, next) {
    req.lang = 'en';
    res.redirect('/en/login');
});

router.get('/en', function (req, res, next) {
    req.lang = 'en';
    res.redirect('/en/login');
});

router.use('/en/', function (req, res, next) {
    req.lang = 'en';
    next();
}, users);

router.use('/cn/', function (req, res, next) {
    req.lang = 'zh-cn';
    next();
}, users);

router.use('/en/client', function (req, res, next) {
    req.lang = 'en';
    next();
}, client);

router.use('/cn/client', function (req, res, next) {
    req.lang = 'zh-cn';
    next();
}, client);

module.exports = router;