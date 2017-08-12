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

router.post('/', (req, res) => {
    // 这里写数据页面 POST 数据过来时要处理的逻辑
    console.log('Post Create Staff!')
    const lang = req.lang ? req.lang : 'en'
    res.redirect(`/${lang}/accounts`)
})

module.exports = router
