import { Router } from 'express'
import { checkUser } from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'login',
        language: lang,
        lang: require(`./lang/${lang}/login`),
    }

    res.render('users/login', data)
})

module.exports = router
