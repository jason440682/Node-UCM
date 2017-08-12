import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'others/modifyWork',
        language: lang,
        lang: require(`./lang/${lang}/modifyWork`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        title: 'View/Modify Work',
        user: req.session.userName,
    }

    res.render('client/workbook/modifyWork', data)
})

module.exports = router
