/**
 *  这个路由页面主要负责跟用户相关的界面，比如用户注册、登录等
 */

var express = require('express');
var router = express.Router();

var register = require('./users/register');
var signup = require('./users/signup');

router.use('/', register);
router.use('/signup', signup);

module.exports = router;
