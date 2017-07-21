'use strict'
import { Router } from 'express'
const router = Router();

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'login',
        language: lang,
        lang: require(`./lang/${lang}/login`)
    };

    res.render('users/login', data);
});

router.post('/', (req, res) => {
    // 这里写登录页面 POST 数据过来时要处理的逻辑
    console.log('Post login!');
    res.redirect('/');
});

module.exports = router;
