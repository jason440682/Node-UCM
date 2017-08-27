import { Router } from 'express'
import { getBusinessTypes, getTimezones, getCountries, getMasterUser } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Modify Master User')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const data = {
        key: 'user/modifyMaster',
        language: lang,
        lang: require(`./lang/${lang}/modifyMaster`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    Promise.all([getBusinessTypes(), getTimezones(), getCountries(), getMasterUser(userName)])
        .then(([businessTypes, timezones, countries, userInfo]) => {
            console.log('success')
            console.log(userInfo.body)
            data.businessTypes = businessTypes.body
            data.timezones = timezones.body
            data.countries = countries.body
            data.userInfo = userInfo.body
            res.render('client/user/modifyMaster', data)
        }).catch((error) => {
            console.log(error)
            res.redirect(`/${lang}/accounts`)
        })
})

module.exports = router
