var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    staffs: ['staff1', 'staff2', 'staff3', 'staff4', 'staff5'],
    works: [
        {
            id: '1',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage'
        },
        {
            id: '2',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage'
        },
        {
            id: '3',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'workbook/workbook',

        language: 'en',
        lang: require('./lang/en/workbook'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        staffs: data_eg.staffs,
        works: data_eg.works
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/workbook');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/workbook/workbook', data);
});

router.post('/', function (req, res, next) {
    //表单处理逻辑
});

module.exports = router;
