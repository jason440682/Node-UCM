import { Router } from 'express'
import { getBusinessTypes, getTimezones, getCountries } from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get register')
    let lang = req.lang ? req.lang : 'en'
    let data = {
        key: 'signup',
        language: lang,
        lang: require(`./lang/${lang}/signup`)
    }

    Promise.all([getBusinessTypes(), getTimezones(), getCountries()]).then((list) => {
        console.log('success')
        data.businessTypes = list[0].body
        data.timezones = list[1].body
        data.countries = list[2].body

        res.render('users/signup', data)
    })
})

router.post('/', (req, res) => {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
    console.log('Post Register!')
    let lang = req.lang ? req.lang : 'en'
    res.redirect(`/${lang}/accounts`)
})

module.exports = router
