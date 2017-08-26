import { Router } from 'express'

const router = Router()

const data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    payments: [
        {
            id: '1',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail',
        },
        {
            id: '2',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail',
        },
        {
            id: '3',
            pay: 'Pay for Invoice',
            method: 'Method',
            note: 'Note',
            date: 'Date',
            amount: 'Amount',
            detail: 'View Detail',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'billingPayment/payment',
        language: lang,
        lang: require(`./lang/${lang}/payment`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        names: data_eg.names,
        payments: data_eg.payments,
        user: req.session.userName,
    }

    res.render('client/billingPayment/payment', data)
})

module.exports = router
