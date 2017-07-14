'use strict'
import { Router } from 'express'
const router = Router();

var data_eg = {
    account: {
        num: '000391',
        type: 'Business'
    }
};

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'accounts/modifyAccount',
        language: lang,
        lang: require(`./lang/${lang}/modifyAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        account: data_eg.account
    };

    res.render('client/accounts/modifyAccount', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
