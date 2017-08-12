import { Router } from 'express'

const router = Router()

const data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    staffs: ['staff1', 'staff2', 'staff3', 'staff4', 'staff5'],
    works: [
        {
            id: '1',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage',
        },
        {
            id: '2',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage',
        },
        {
            id: '3',
            number: 'Number',
            work: 'Work',
            status: 'Status',
            assignee: 'Assignee',
            time: 'Date/Time',
            duration: 'Duration',
            location: 'Location',
            client: 'Client',
            note: 'Note',
            billable: 'Billable',
            billingrate: 'Billingrate',
            manage: 'Manage',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'workbook/workbook',
        language: lang,
        lang: require(`./lang/${lang}/workbook`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        names: data_eg.names,
        staffs: data_eg.staffs,
        works: data_eg.works,
        user: req.session.userName,
    }

    res.render('client/workbook/workbook', data)
})

module.exports = router
