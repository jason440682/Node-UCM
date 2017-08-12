import { Router } from 'express'

const router = Router()

const data_eg = {
    account: {
        num: '000391',
        type: 'Business',
    },
}

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'accounts/modifyAccount',
        language: lang,
        lang: require(`./lang/${lang}/modifyAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        account: data_eg.account,
        user: req.session.userName,
    }

    res.render('client/accounts/modifyAccount', data)
})

module.exports = router
