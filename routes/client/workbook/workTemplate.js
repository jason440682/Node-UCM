import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'workbook/workTemplate',
        language: lang,
        lang: require(`./lang/${lang}/workTemplate`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        user: req.session.userName,
    }

    res.render('client/workbook/workTemplate', data)
})

module.exports = router
