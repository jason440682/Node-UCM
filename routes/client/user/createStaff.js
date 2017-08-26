import { Router } from 'express'
import { getTimezones, getCountries } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Create Staff')
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'user/createStaff',
        language: lang,
        lang: require(`./lang/${lang}/createStaff`),
    }

    Promise.all([getTimezones(), getCountries()]).then(([timezones, countries]) => {
        console.log('success')
        data.timezones = timezones.body
        data.countries = countries.body

        res.render('client/user/createStaff', data)
    })
})

module.exports = router
