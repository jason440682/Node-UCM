import { Router } from 'express'

const router = Router()

const data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    invoices: [
        {
            id: '1',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
            manage: 'Manage',
        },
        {
            id: '2',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
            manage: 'Manage',
        },
        {
            id: '3',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
            manage: 'Manage',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'billingPayment/billingPayment',
        language: 'en',
        lang: require(`./lang/${lang}/billingPayment`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        names: data_eg.names,
        invoices: data_eg.invoices,
        user: req.session.userName,
    }

    res.render('client/billingPayment/billingPayment', data)
})

module.exports = router
