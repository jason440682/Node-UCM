'use strict'
import { Router } from 'express'
const router = Router();

const data_eg = [
    {
        id: 'accounts1',
        number: '000382',
        client: 'James Johnson',
        assignstaff: 'Assign Staff C',
        accountstatus: 'New',
        contact: 'James Johnson',
        email: 'James@gmail.com',
        phone: '222-222-2222'
    },
    {
        id: 'accounts2',
        number: '000385',
        client: 'Maria Karey',
        assignstaff: 'Assign Staff A',
        accountstatus: 'Closed',
        contact: 'David Karey',
        email: 'D.K@hotmail.com',
        phone: '123-456-7890'
    },
    {
        id: 'accounts3',
        number: '000391',
        client: 'WWW Biz',
        assignstaff: 'Assign Staff D',
        accountstatus: 'Active',
        contact: 'Wayne Walker',
        email: 'Email',
        phone: 'Phone'
    },
    {
        id: 'accounts4',
        number: '100000',
        client: 'Client',
        assignstaff: 'Assign Staff',
        accountstatus: 'Account Status',
        contact: 'Contact',
        email: 'Email',
        phone: 'Phone'
    },
    {
        id: 'accounts5',
        number: '111111',
        client: 'Client',
        assignstaff: 'Assign Staff',
        accountstatus: 'Account Status',
        contact: 'Contact',
        email: 'Email',
        phone: 'Phone',
        manage: 'Manage'
    }
];

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'accounts/clientAccounts',
        language: lang,
        lang: require(`./lang/${lang}/clientAccounts`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        accounts: data_eg
    };

    res.render('client/accounts/clientAccounts', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
});

module.exports = router;
