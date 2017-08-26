import { Router } from 'express'

const router = Router()

const data_eg = {
    client_names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    bill_info: {
        number: '000023',
        date: '2017/1/24',
        name: 'James Johnson',
        address: '123 ABC Street, Good City, CA9001',
    },
    invoices: [
        {
            id: '1',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status',
        },
        {
            id: '2',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status',
        },
        {
            id: '3',
            work_number: 'Work Number',
            description: 'Description',
            time: 'Date & Time',
            duration: 'Duration',
            rate: 'Rate',
            subtotal: 'Subtotal',
            work_status: 'Work Status',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'others/modifyInvoice',
        language: lang,
        lang: require(`./lang/${lang}/modifyInvoice`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        client_names: data_eg.client_names,
        bill_info: data_eg.bill_info,
        invoices: data_eg.invoices,
        user: req.session.userName,
    }

    res.render('client/billingPayment/modifyInvoice', data)
})

module.exports = router
