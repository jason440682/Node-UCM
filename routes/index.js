'use strict';

import { Router } from 'express'
const router = Router();

import lang from '../config/lang'
const langs = Object.keys(lang);

const apiTable = {
    // Client
    '/accounts': require('./client/accounts/clientAccounts'),
    '/createAccount': require('./client/accounts/createAccount'),
    '/notification': require('./client/accounts/notification'),
    '/docManager': require('./client/accounts/docManager'),
    '/modifyAccount': require('./client/accounts/modifyAccount'),
    '/workbook': require('./client/workbook/workbook'),
    '/createWork': require('./client/workbook/createWork'),
    '/workCalendar': require('./client/workbook/workCalendar'),
    '/workTemplate': require('./client/workbook/workTemplate'),
    '/modifyWork': require('./client/workbook/modifyWork'),
    '/billingPayment': require('./client/billingPayment/billingPayment'),
    '/createInvoice': require('./client/billingPayment/createInvoice'),
    '/invoices': require('./client/billingPayment/invoices'),
    '/payment': require('./client/billingPayment/payment'),
    '/modifyInvoice': require('./client/billingPayment/modifyInvoice'),
    '/newsletter': require('./client/marketing/newsletter'),
    '/createNewsletter': require('./client/marketing/createNewsletter'),
    '/createStaff': require('./client/user/createStaff'),

    // User
    '/login': require('./users/login'),
    '/register': require('./users/signup'),

    // Api
    '/validate': require('./api/verificationCode')
};

Object.keys(apiTable).forEach(url => {
    router.use('/:language' + url, (req, res, next) => {
        let isOriginalUrl = !(req.params.language === 'images' || req.params.language === 'scripts' || req.params.language === 'styles');
        let noLangTag = isOriginalUrl && langs.findIndex(item => item === req.params.language) === -1;
        if (noLangTag) {
            res.redirect('/en' + req.originalUrl);
        } else {
            req.lang = lang[req.params.language];
            next();
        }
    }, apiTable[url]);
})

router.get('/', (req, res) => {
    req.lang = 'en';
    res.redirect('/en/login');
});

module.exports = router;