import { Router } from 'express'
import { getClientAccounts, getAccountStatus, getStaffUsers } from '../../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Client Accounts')
    const lang = req.lang ? req.lang : 'en'
    const userName = req.session.userName
    const data = {
        key: 'accounts/clientAccounts',
        language: lang,
        lang: require(`./lang/${lang}/clientAccounts`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footnavbar`),
        user: userName,
    }

    Promise.all([getClientAccounts(userName), getAccountStatus(userName), getStaffUsers(userName)])
        .then(([{ body: accounts }, { body: status }, { body: staffUsers }]) => {
            const [Status, Staff] = [{}, {}]
            status.forEach((stat) => {
                Status[stat.customerAccountStatusId] = stat.accountStatusName
            })

            staffUsers.forEach((user) => {
                Staff[user.staffUserId] = user.userName
            })

            accounts.map((account) => {
                account.accountStatusName = Status[account.customerAccountStatus]
                account.staffUserName = Staff[account.assignedStaffUser]

                return account
            })

            data.accounts = accounts
            res.render('client/accounts/clientAccounts', data)
        }).catch((error) => {
            console.log('error')
            console.log(error)
            if (error.status === 500) {
                data.error = '与服务器断开连接，请稍后再试！'
            } else {
                data.error = error
            }
            data.accounts = []
            res.render('client/accounts/clientAccounts', data)
        })
})

module.exports = router
