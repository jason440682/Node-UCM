var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    payments: [
        {
            id: '1',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail'
        },
        {
            id: '2',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail'
        },
        {
            id: '3',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'billingPayment/payment',

        language: 'en',
        lang: require('./lang/en/payment'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        payments: data_eg.payments
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/payment');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/billingPayment/payment', data);
});

router.post('/', function (req, res, next) {
    //表单处理逻辑
});

module.exports = router;
