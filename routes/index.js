import { Router } from 'express'
import lang from '../config/lang'

const router = Router()
const langs = Object.keys(lang)

const routeTable = {
    // Client
    accounts: require('./client/accounts/clientAccounts'),
    createAccount: require('./client/accounts/createAccount'),
    notification: require('./client/accounts/notification'),
    docManager: require('./client/accounts/docManager'),
    modifyAccount: require('./client/accounts/modifyAccount'),
    workbook: require('./client/workbook/workbook'),
    createWork: require('./client/workbook/createWork'),
    workCalendar: require('./client/workbook/workCalendar'),
    workTemplate: require('./client/workbook/workTemplate'),
    modifyWork: require('./client/workbook/modifyWork'),
    billingPayment: require('./client/billingPayment/billingPayment'),
    createInvoice: require('./client/billingPayment/createInvoice'),
    invoices: require('./client/billingPayment/invoices'),
    payment: require('./client/billingPayment/payment'),
    modifyInvoice: require('./client/billingPayment/modifyInvoice'),
    newsletter: require('./client/marketing/newsletter'),
    createNewsletter: require('./client/marketing/createNewsletter'),
    createStaff: require('./client/user/createStaff'),

    // User
    login: require('./users/login'),
    register: require('./users/signup'),
}

const apiTable = {
    // Api
    validate: require('./api/verificationCode'),
    test: require('./api/test'),
}

Object.keys(apiTable).forEach((url) => {
    router.use(`/api/${url}`, apiTable[url])
})

router.use('/:language', (req, res, next) => {
    if (langs.findIndex(item => item === req.params.language) === -1) {
        res.redirect(`/en${req.originalUrl}`)
    } else {
        req.lang = lang[req.params.language]
        next()
    }
})

Object.keys(routeTable).forEach((url) => {
    router.use(`/:language/${url}`, routeTable[url])
})


router.get('/:language', (req, res) => {
    res.redirect(`/${req.params.language}/login`)
})

router.get('/', (req, res) => {
    res.redirect('/en/login')
})

module.exports = router
