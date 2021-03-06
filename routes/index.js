import { Router } from 'express'
import lang from '../config/lang'

const router = Router()
const langs = Object.keys(lang)

const clientTable = {
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

    modifyMaster: require('./client/user/modifyMaster'),
    staffUser: require('./client/user/staffUser'),
    createStaff: require('./client/user/createStaff'),
}

const userTable = {
    // User
    login: require('./users/login'),
    register: require('./users/signup'),
}

const apiTable = {
    // Api
    user: require('./api/user'),
    validate: require('./api/verificationCode'),
    logo: require('./api/logo'),
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

Object.keys(clientTable).forEach((url) => {
    router.use(`/:language/${url}`, (req, res, next) => {
        if (req.session.validation && req.session.userName) {
            next()
        } else {
            res.redirect(`/${req.params.language}/login`)
        }
    }, clientTable[url])
})

Object.keys(userTable).forEach((url) => {
    router.use(`/:language/${url}`, userTable[url])
})

router.get('/:language', (req, res) => {
    if (req.session.validation && req.session.userName) {
        res.redirect(`/${req.params.language}/accounts`)
    } else {
        res.redirect(`/${req.params.language}/login`)
    }
})

router.get('/', (req, res) => {
    if (req.session.validation && req.session.userName) {
        res.redirect('/en/accounts')
    } else {
        res.redirect('/en/login')
    }
})

module.exports = router
