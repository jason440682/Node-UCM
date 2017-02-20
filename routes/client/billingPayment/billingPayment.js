var express = require('express');
router = express.Router();

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
            status: 'Status',
            manage: 'Manage'
        },
        {
            id: '2',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
            manage: 'Manage'
        },
        {
            id: '3',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
            manage: 'Manage'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'billingPayment/billingPayment',

        language: 'en',
        lang: require('./lang/en/billingPayment'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        invoices: data_eg.invoices
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/billingPayment');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/billingPayment/billingPayment', data);
});

router.post('/', function (req, res, next) {
    //表单处理逻辑
});

module.exports = router;
