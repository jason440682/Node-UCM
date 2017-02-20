var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    works: [
        {
            id: '2',
            time: '7:00am',
            Sunday: 'Sunday',
            Monday: 'Monday',
            Tuesday: 'Tuesday',
            Wednesday: 'Wednesday',
            Thursday: 'Thursday',
            Friday: 'Friday',
            Saturday: 'Saturday'
        },
        {
            id: '3',
            time: '8:00am',
            Sunday: 'Sunday',
            Monday: 'Monday',
            Tuesday: 'Tuesday',
            Wednesday: 'Wednesday',
            Thursday: 'Thursday',
            Friday: 'Friday',
            Saturday: 'Saturday'
        },
        {
            id: '1',
            time: '9:00am',
            Sunday: 'Sunday',
            Monday: 'Monday',
            Tuesday: 'Tuesday',
            Wednesday: 'Wednesday',
            Thursday: 'Thursday',
            Friday: 'Friday',
            Saturday: 'Saturday'
        }
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'workbook/workCalendar',

        language: 'en',
        lang: require('./lang/en/workCalendar'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        works: data_eg.works
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/workCalendar');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/workbook/workCalendar', data);

});

router.post('/', function (req, res, next) {
    //表单处理逻辑
});

module.exports = router;
