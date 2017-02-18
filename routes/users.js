/**
 *  这个路由页面主要负责跟用户相关的界面，比如用户注册、登录等
 */
var express = require('express');
var router = express.Router();

var register = require('./users/signup');
var login = require('./users/login');
var create = require('./users/createStaff');

router.use('/login', login);
router.use('/register', register);
router.use('/create', create);

module.exports = router;
