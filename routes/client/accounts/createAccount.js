import { Router } from 'express'
import { getAccountStatus, getStaffUsers, getCountries, getEmailGroups } from '../../plugins/requests'

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
    ]).then(([accountStatus, assign, emailGroup, countries]) => {
        data.accountStatus = accountStatus.body
        data.assignTo = assign.body
        data.emailGroup = emailGroup.body
        data.countries = countries.body
        res.render('client/accounts/createAccount', data)
    }).catch((error) => {
        console.log(error)
        res.redirect(`/${lang}/accounts`)
    })
})

module.exports = router
