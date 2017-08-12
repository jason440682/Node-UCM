import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'accounts/createAccount',
        language: lang,
        lang: require(`./lang/${lang}/createAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        user: req.session.userName,
    }

    res.render('client/accounts/createAccount', data)
})

module.exports = router
