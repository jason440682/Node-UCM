'use strict'
import { Router } from 'express'
const router = Router();

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

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'accounts/notification',
        language: lang,
        lang: require(`./lang/${lang}/notification`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        names: data_eg_notification.names,
        notifications: data_eg.notifications
    };

    res.render('client/accounts/notification', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
