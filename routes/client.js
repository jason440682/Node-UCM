/**
 *  这个路由页面主要负责跟管理人员相关的界面，比如创建用户、管理账号等
 */
var express = require('express');
var router = express.Router();

var create = require('./users/createStaff');
var accounts = require('./client/accounts');
var createaccount = require('./client/createaccount'); 
var notification = require('./client/notification');
var workbook = require('./client/workbook');
var creatework = require('./client/creatework');
var workcalendar = require('./client/workcalendar');
var worktemplate = require('./client/worktemplate');

router.use('/create', create);
router.use('/accounts', accounts);
router.use('/createaccount',createaccount);
router.use('/notification',notification);
router.use('/workbook',workbook);
router.use('/creatework',creatework);
router.use('/workcalendar',workcalendar);
router.use('/worktemplate',worktemplate);

module.exports = router;
