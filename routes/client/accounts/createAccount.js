import { Router } from 'express'
import { getAccountStatus, getStaffUsers, getCountries, getEmailGroups, getMasterUser } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Create Client Accounts')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const data = {
        key: 'accounts/createAccount',
        language: lang,
        lang: require(`./lang/${lang}/createAccount`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    Promise.all([
        getAccountStatus(userName),
        getStaffUsers(userName),
        getEmailGroups(userName),
        getCountries(),
        getMasterUser(userName),
    ]).then(([accountStatus, assign, emailGroup, countries, userInfo]) => {
        data.assignTo = assign.body.length !== 0 ? assign.body : [
            { staffUserId: userInfo.body.masterUserId, userName },
        ]
        data.accountStatus = accountStatus.body
        data.emailGroup = emailGroup.body
        data.countries = countries.body
        res.render('client/accounts/createAccount', data)
    }).catch((error) => {
        console.log(error)
        res.redirect(`/${lang}/accounts`)
    })
})

module.exports = router
