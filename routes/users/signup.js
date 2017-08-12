import { Router } from 'express'
import { getBusinessTypes, getTimezones, getCountries } from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Register')
    const lang = req.lang ? req.lang : 'en'
    const data = {
        key: 'signup',
        language: lang,
        lang: require(`./lang/${lang}/signup`),
    }

    Promise.all([getBusinessTypes(), getTimezones(), getCountries()])
        .then(([businessTypes, timezones, countries]) => {
            console.log('success')
            data.businessTypes = businessTypes.body
            data.timezones = timezones.body
            data.countries = countries.body

            res.render('users/signup', data)
        })
})

module.exports = router
