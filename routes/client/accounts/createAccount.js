'use strict'
import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'accounts/clientAccounts',
        language: lang,
        lang: require(`./lang/${lang}/createAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`)
    };

    res.render('client/accounts/createAccount', data);
});

router.post('/', function (req, res, next) {
    //表单post过来的数据处理逻辑
});

module.exports = router;
