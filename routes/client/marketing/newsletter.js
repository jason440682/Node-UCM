var express = require('express');
var router = express.Router();

var data_eg = {
    newsletters: [
        {
            id: '1',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Status',
            manage: 'Manage'
        },
        {
            id: '2',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Status',
            manage: 'Manage'
        },
        {
            id: '3',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Completed',
            manage: 'Manage'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'marketing/newsletter',

        language: 'en',
        lang: require('./lang/en/newsletter'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        newsletters: data_eg.newsletters
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/newsletter');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/marketing/newsletter', data);
});

router.post('/', function (req, res, next) {
    //表单处理请求
});

module.exports = router;
