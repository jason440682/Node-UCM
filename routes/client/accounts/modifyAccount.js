import { Router } from 'express'
import { getAccountStatus, getStaffUsers, getCountries, getEmailGroups, getClientInfo } from '../../plugins/requests'

const router = Router()

router.get('/:id', (req, res) => {
    console.log('Get Modify Account')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const id = req.params.id
    const data = {
        key: 'accounts/modifyAccount',
        language: lang,
        lang: require(`./lang/${lang}/modifyAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    Promise.all([
        getAccountStatus(userName),
        getStaffUsers(userName),
        getEmailGroups(userName),
        getCountries(),
        getClientInfo(userName, id),
    ]).then(([accountStatus, assign, emailGroup, countries, userInfo]) => {
        data.accountStatus = accountStatus.body
        data.assignTo = assign.body
        data.emailGroup = emailGroup.body
        data.countries = countries.body
        data.userInfo = userInfo.body
        console.log(data.userInfo)
        res.render('client/accounts/modifyAccount', data)
    }).catch((error) => {
        console.log(error)
        res.redirect(`${lang}/accounts`)
    })
})

module.exports = router
