import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'marketing/createNewsletter',
        language: lang,
        lang: require(`./lang/${lang}/createNewsletter`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: req.session.userName,
    }

    res.render('client/marketing/createNewsletter', data)
})

module.exports = router
