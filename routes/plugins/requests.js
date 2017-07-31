import superagent from 'superagent'

const host = 'http://54.169.159.192:8080/UCM/'
const server = {
    user: `${host}user`,
    getVerificationCode: `${host}getVerificationCode`,
    checkVerificationCode: `${host}checkVerificationCode`,
    getBusinessTypes: `${host}getBusinessTypes`,
    getCountries: `${host}getCountries`,
    getTimezones: `${host}getTimezones`,
    signUp: `${host}SignUp`,

    test: 'http://localhost:3331/en/test',
}


function request(method, url, data = undefined) {
    let req = superagent(method, url)
    const Method = method.toUpperCase()

    if (Method === 'GET') {
        req = superagent.get(url)
        if (data !== undefined) req.query(data)
    } else {
        if (Method !== 'POST') data._method = Method
        req = superagent.post(url).send(JSON.stringify(data))
    }

    console.log('\n----------- Request -----------')
    console.log(`url: ${url}`)
    console.log(`method: ${Method}`)
    if (req.data) console.log(`data: ${req.data}`)
    console.log(`header: ${JSON.stringify(req.header)}`)
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
        return request('get', server.getBusinessTypes)
    },

    getCountries() {
        return request('get', server.getCountries)
    },

    getTimezones() {
        return request('get', server.getTimezones)
    },

    getVerificationCode() {
        return request('GET', server.getVerificationCode)
    },

    checkVerificationCode(code, cookie) {
        const req = superagent.post(server.checkVerificationCode)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Cookie', cookie)
            .send({ code })

        console.log('\n----------- Request -----------')
        console.log(`url: ${server.checkVerificationCode}`)
        console.log('method: POST')
        if (req._data) console.log(`data: ${req._data}`)
        console.log(`header: ${JSON.stringify(req.header)}`)
        console.log('-------------------------------')

        return new Promise((resolve, reject) => {
            req.end((err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    },
}
