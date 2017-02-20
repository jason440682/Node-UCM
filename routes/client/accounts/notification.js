var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    notifications: [
        {
            id: '1',
            number: '0000103',
            name: 'Payment Reminder',
            description: 'Remind client of paying invoice.......',
            recipients: 'James Johnson',
            sendtime: '9am 12/10/2016',
            status: 'Unsent'
        },
        {
            id: '2',
            number: '0000102',
            name: 'Payment Reminder',
            description: 'Description',
            recipients: 'James Johnson',
            sendtime: '12am 12/10/2016',
            status: 'Status'
        },
        {
            id: '3',
            number: '0000101',
            name: 'Payment Reminder',
            description: 'Description',
            recipients: 'James Johnson',
            sendtime: 'Send Date/Time',
            status: 'Status'
        }
    ]
};

router.use('/', function (req, res, next) {
    var data = {
        key: 'accounts/notification',

        language: 'en',
        lang: require('./lang/en/notification'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        notifications: data_eg.notifications
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/notification');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/accounts/notification', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
