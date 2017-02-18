/**
 *  这个路由页面主要负责跟管理人员相关的界面，比如创建用户、管理账号等
 */
var express = require('express');
var router = express.Router();

var create = require('./client/user/createStaff');
var accounts = require('./client/accounts/clientAccounts');
var createaccount = require('./client/accounts/createAccount');
var notification = require('./client/accounts/notification');
var workbook = require('./client/workbook/workbook');
var creatework = require('./client/workbook/createWork');
var workcalendar = require('./client/workbook/workCalendar');
var worktemplate = require('./client/workbook/workTemplate');
var modifywork = require('./client/others/modifyWork');
var billingpayment = require('./client/billingPayment/billingpayment');
var createinvoice = require('./client/billingPayment/createinvoice');
var invoices = require('./client/billingPayment/invoices');
var payment = require('./client/billingPayment/payment');
var modifyinvoice = require('./client/others/modifyInvoice');
var newsletter = require('./client/marketing/newsletter');
var createnewsletter = require('./client/marketing/createNewsletter');
var documentManager = require('./client/accounts/docManager');
var createStaff = require('./client/user/createStaff');


router.use('/accounts', accounts);
router.use('/createaccount',createaccount);
router.use('/notification',notification);
router.use('/workbook',workbook);
router.use('/creatework',creatework);
router.use('/workcalendar',workcalendar);
router.use('/worktemplate',worktemplate);
router.use('/modifywork',modifywork);
router.use('/billingpayment',billingpayment);
router.use('/createinvoice',createinvoice);
router.use('/invoices',invoices);
router.use('/payment',payment);
router.use('/modifyinvoice',modifyinvoice);
router.use('/newsletter',newsletter);
router.use('/createnewsletter',createnewsletter);
router.use('/docManager', documentManager);
router.use('/createStaff', createStaff);

module.exports = router;
