import { Router } from 'express'
import { getTimezones, getCountries, getStaffUserInfo } from '../../plugins/requests'

const router = Router()

router.get('/:id', (req, res) => {
    console.log('Get Modify Staff user')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const staffUserId = req.params.id
    const data = {
        key: 'user/modifyStaff',
        language: lang,
        lang: require(`./lang/${lang}/modifyStaff`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    Promise.all([getTimezones(), getCountries(), getStaffUserInfo(userName, staffUserId)])
        .then(([timezones, countries, userInfo]) => {
        console.log('success get staff info')
        console.log(userInfo.body)
        
        data.timezones = timezones.body
        data.countries = countries.body
        data.userInfo = userInfo.body

        res.render('client/user/modifyStaff', data)
        }).catch((error) => {
            console.log(error)
            res.redirect(`/${lang}/accounts`)
        })
})

module.exports = router
