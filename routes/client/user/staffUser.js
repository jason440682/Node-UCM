import { Router } from 'express'
import { getStaffUsers, getLogo } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Staff User')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const data = {
        key: 'user/staffUser',
        language: lang,
        lang: require(`./lang/${lang}/staffUser`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    getStaffUsers(userName).then(({ body: staffUsers }) => {
        console.log(staffUsers)
        data.staffUsers = staffUsers
        const tasks = staffUsers.map(user => getLogo(user.userName))
        console.log('tasks: ')
        console.log(tasks)
        return Promise.all(tasks)
    }).then((results) => {
        console.log('results')
        console.log(results)
        res.render('client/user/staffUser', data)
    }).catch((error) => {
        console.log('error')
        console.log(error)
        if (error.status === 500) {
            data.error = '与服务器断开连接，请稍后再试！'
        } else {
            data.error = error
        }
        data.accounts = []
        res.render('client/user/staffUser', data)
    })
})

module.exports = router
