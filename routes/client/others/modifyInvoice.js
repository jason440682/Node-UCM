var express = require('express');
var router = express.Router();

var data_eg = {
    client_names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    bill_info: {
        date: '2017/1/24',
        name: 'James Johnson',
        address: '123 ABC Street, Good City, CA9001'
    },
    invoices: [
        {
            id: '1',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status'
        },
        {
            id: '2',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status'
        },
        {
            id: '3',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'others/modifyInvoice',

        language: 'en',
        lang: require('./lang/en/modifyInvoice'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        client_names: data_eg.client_names,
        bill_info: data_eg.bill_info,
        invoices: data_eg.invoices
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/modifyInvoice');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/others/modifyInvoice', data);
});

router.post('/', function (req, res, next) {
    //表单处理请求
});

module.exports = router;
