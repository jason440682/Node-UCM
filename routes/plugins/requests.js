import superagent from 'superagent'

const METHOD_GET = 1
const METHOD_POST = 2

const host = 'http://54.169.159.192:8080/UCM'
const server = {
    getVerificationCode: `${host}/getVerificationCode`,
    checkVerificationCode: `${host}/checkVerificationCode`,
    login: `${host}/LogIn`,

    // Public
    getBusinessTypes: `${host}/getBusinessTypes`,
    getCountries: `${host}/getCountries`,
    getTimezones: `${host}/getTimezones`,
    getClient: `${host}/GetClient`,
    getStaffUser: `${host}/GetStaffUser`,

    // Create Client Account
    getAccountStatus(userName) {
        return `${host}/getCustomerAccountStatuss/${userName}`
    },
    getStaffUsers(userName) {
        return `${host}/staffUsers/${userName}`
    },
    getEmailGroups(userName) {
        return `${host}/getCustomerEmailGroups/${userName}`
    },

    // Modify Client Account
    getClientAccounts(userName) {
        return `${host}/clients/${userName}`
    },

    getMasterUser(userName) {
        return `${host}/GetMasterUser/${userName}`
    },

    getLogo(userName) {
        return `${host}/Logo/${userName}`
    },

    test: 'http://localhost:3331/en/test',
}


function request(method, url, { data = undefined, cookie = undefined } = {}) {
    let req = superagent(method, url)

    if (method === METHOD_GET) {
        req = superagent.get(url)
        if (data !== undefined) req.query(data)
    } else {
        if (method !== METHOD_POST) data._method = method // eslint-disable-line
        req = superagent.post(url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(data)
    }

    if (cookie) req.set('Cookie', cookie)

    console.log('\n----------- Request -----------')
    console.log(`url: ${url}`)
    console.log(`method: ${method}`)
    console.log(`header: ${JSON.stringify(req.header)}`)
    console.log(`cookie: ${cookie}`)
    if (method === METHOD_POST) console.log(`data: ${JSON.stringify(req._data)}`) // eslint-disable-line
    console.log('-------------------------------')

    return new Promise((resolve, reject) => {
        req.end((err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

module.exports = {
    getBusinessTypes() {
        return request(METHOD_GET, server.getBusinessTypes)
    },

    getCountries() {
        return request(METHOD_GET, server.getCountries)
    },

    getTimezones() {
        return request(METHOD_GET, server.getTimezones)
    },

    getVerificationCode() {
        return request(METHOD_GET, server.getVerificationCode)
    },

    checkVerificationCode(code, cookie) {
        const data = { code }
        return request(METHOD_POST, server.checkVerificationCode, { data, cookie })
    },

    checkUser(username, password) {
        const data = { userName: username, hashedPassword: password }
        return request(METHOD_POST, server.login, { data })
    },

    getClientInfo(userName, customerId) {
        const data = { userName, customerId }
        return request(METHOD_POST, server.getClient, { data })
    },

    getStaffUserInfo(userName, staffUserId) {
        const data = { userName, staffUserId }
        return request(METHOD_POST, server.getStaffUser, { data })
    },

    getAccountStatus(userName) {
        return request(METHOD_GET, server.getAccountStatus(userName))
    },

    getStaffUsers(userName) {
        return request(METHOD_GET, server.getStaffUsers(userName))
    },

    getEmailGroups(userName) {
        return request(METHOD_GET, server.getEmailGroups(userName))
    },

    getClientAccounts(userName) {
        return request(METHOD_GET, server.getClientAccounts(userName))
    },

    getMasterUser(userName) {
        return request(METHOD_GET, server.getMasterUser(userName))
    },

    getLogo(userName) {
        return request(METHOD_GET, server.getLogo(userName))
    },
}
