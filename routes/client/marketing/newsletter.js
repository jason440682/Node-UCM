import { Router } from 'express'

const router = Router()

const data_eg = {
    newsletters: [
        {
            id: '1',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Status',
            manage: 'Manage',
        },
        {
            id: '2',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Status',
            manage: 'Manage',
        },
        {
            id: '3',
            number: 'Number',
            name: 'Name',
            description: 'Description',
            recipents: 'Recipents',
            send_time: 'Send Date/Time',
            status: 'Completed',
            manage: 'Manage',
        },
    ],
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'marketing/newsletter',
        language: lang,
        lang: require(`./lang/${lang}/newsletter`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        newsletters: data_eg.newsletters,
        user: req.session.userName,
    }

    res.render('client/marketing/newsletter', data)
})

module.exports = router
