/**
 *  这个路由页面主要负责跟管理人员相关的界面，比如创建用户、管理账号等
 */
var express = require('express');
var router = express.Router();

var accounts = require('./client/accounts/clientAccounts');
var createAccount = require('./client/accounts/createAccount');
var notification = require('./client/accounts/notification');
var documentManager = require('./client/accounts/docManager');
var modifyAccount = require('./client/accounts/modifyAccount');
var workbook = require('./client/workbook/workbook');
var createWork = require('./client/workbook/createWork');
var workCalendar = require('./client/workbook/workCalendar');
var workTemplate = require('./client/workbook/workTemplate');
var modifyWork = require('./client/others/modifyWork');
var billingPayment = require('./client/billingPayment/billingPayment');
var createInvoice = require('./client/billingPayment/createInvoice');
var invoices = require('./client/billingPayment/invoices');
var payment = require('./client/billingPayment/payment');
var modifyInvoice = require('./client/others/modifyInvoice');
var newsletter = require('./client/marketing/newsletter');
var createNewsletter = require('./client/marketing/createNewsletter');
var createStaff = require('./client/user/createStaff');

router.use('/accounts', accounts);
router.use('/createAccount', createAccount);
router.use('/notification', notification);
router.use('/docManager', documentManager);
router.use('/modifyAccount', modifyAccount);

router.use('/workbook', workbook);
router.use('/createWork', createWork);
router.use('/workCalendar', workCalendar);
router.use('/workTemplate', workTemplate);
router.use('/modifyWork', modifyWork);

router.use('/billingPayment', billingPayment);
router.use('/createInvoice', createInvoice);
router.use('/invoices', invoices);
router.use('/payment', payment);
router.use('/modifyInvoice', modifyInvoice);

router.use('/newsletter', newsletter);
router.use('/createNewsletter', createNewsletter);

router.use('/createStaff', createStaff);

module.exports = router;
