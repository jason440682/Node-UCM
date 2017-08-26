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
        },
        {
            id: '2',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
        },
        {
            id: '3',
            type: 'Type',
            number: 'Number',
            description: 'Description',
            date: 'Date',
            total: 'Total',
            status: 'Status',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'billingPayment/invoices',
        language: lang,
        lang: require(`./lang/${lang}/invoices`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        names: data_eg.names,
        invoices: data_eg.invoices,
        user: req.session.userName,
    }

    res.render('client/billingPayment/invoices', data)
})

module.exports = router
