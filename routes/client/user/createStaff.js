import { Router } from 'express'
import { getTimezones, getCountries } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Create Staff')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const data = {
        key: 'user/createStaff',
        language: lang,
        lang: require(`./lang/${lang}/createStaff`),
        nav: require(`../public/lang/${lang}/navbar`),
        user: userName,
    }

    Promise.all([getTimezones(), getCountries()]).then(([timezones, countries]) => {
        data.timezones = timezones.body
        data.countries = countries.body

        res.render('client/user/createStaff', data)
    })
})

module.exports = router
