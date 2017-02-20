var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    invoices: [
        {
            id: '1',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status'
        },
        {
            id: '2',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status'
        },
        {
            id: '3',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'billingPayment/invoices',

        language: 'en',
        lang: require('./lang/en/invoices'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        invoices: data_eg.invoices
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/invoices');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/billingPayment/invoices', data);
});

router.post('/', function (req, res, next) {
    //表单处理请求
});

module.exports = router;
