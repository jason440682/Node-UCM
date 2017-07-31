import { Router } from 'express'
import requests from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en'
    let data = {
        key: 'user/createStaff',
        language: lang,
        lang: require(`./lang/${lang}/createStaff`)
    }

    Promise.all([requests.getBusinessTypes(), requests.getTimezones()]).then((list) => {
        console.log('success')
        data.businessTypes = list[0].body
        data.timezones = list[1].body
    })

    res.render('client/user/createStaff', data)
})

router.post('/', (req, res) => {
    // 这里写数据页面 POST 数据过来时要处理的逻辑
    console.log('Post Create Staff!')
    res.redirect('accounts')
})

module.exports = router
