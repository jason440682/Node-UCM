import superagent from 'superagent'

const host = 'http://54.169.159.192:8080/UCM'
const server = {
    getVerificationCode: `${host}/getVerificationCode`,
    checkVerificationCode: `${host}/checkVerificationCode`,
    getBusinessTypes: `${host}/getBusinessTypes`,
    getCountries: `${host}/getCountries`,
    getTimezones: `${host}/getTimezones`,
    login: `${host}/LogIn`,

    test: 'http://localhost:3331/en/test',
}


function request(method, url, { data = undefined, cookie = undefined } = {}) {
    let req = superagent(method, url)
    const Method = method.toUpperCase()

    if (Method === 'GET') {
        req = superagent.get(url)
        if (data !== undefined) req.query(data)
    } else {
        if (Method !== 'POST') data._method = Method // eslint-disable-line
        req = superagent.post(url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(data)
    }

    if (cookie) req.set('Cookie', cookie)

    console.log('\n----------- Request -----------')
    console.log(`url: ${url}`)
    console.log(`method: ${Method}`)
    console.log(`header: ${JSON.stringify(req.header)}`)
    console.log(`cookie: ${cookie}`)
    if (req._data) console.log(`data: ${JSON.stringify(req._data)}`) // eslint-disable-line
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
        return request('GET', server.getBusinessTypes)
    },

    getCountries() {
        return request('GET', server.getCountries)
    },

    getTimezones() {
        return request('GET', server.getTimezones)
    },

    getVerificationCode() {
        return request('GET', server.getVerificationCode)
    },

    checkUser(username, password) {
        const data = { userName: username, hashedPassword: password }
        return request('POST', server.login, { data })
    },

    checkVerificationCode(code, cookie) {
        const data = { code }
        return request('POST', server.checkVerificationCode, { data, cookie })
    },
}
