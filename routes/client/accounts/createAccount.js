import { Router } from 'express'
import { getAccountStatus, getAssign, getCountries, getEmailGroup } from '../../plugins/requests'

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
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        user: userName,
    }

    Promise.all([
        getAccountStatus(userName),
        getAssign(userName),
        getEmailGroup(userName),
        getCountries(),
    ]).then(([accountStatus, assign, emailGroup, countries]) => {
        console.log(accountStatus.body)
        console.log(assign.body)
        console.log(emailGroup.body)
        console.log(countries.body)

        data.accountStatus = accountStatus.body
        data.assignTo = assign.body
        data.emailGroup = emailGroup.body
        data.countries = countries.body
        res.render('client/accounts/createAccount', data)
    }).catch((error) => {
        console.log(error)
        res.redirect('/accounts')
    })
})

module.exports = router
