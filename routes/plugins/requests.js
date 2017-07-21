import superagent from 'superagent'
import http from 'http'
import Q from 'Q'

const host = 'http://54.169.159.192:8080/UCM/'
const server = {
    user: host + 'user',
    getVerificationCode: host + 'getVerificationCode',
    checkVerificationCode: host + 'checkVerificationCode',
    getBusinessTypes: host + 'getBusinessTypes',
    getCountries: host + 'getCountries',
    getTimezones: host + 'getTimezones',
    signUp: host + 'SignUp',

    test: 'http://localhost:3331/en/test'
};


function request(method, url, data = undefined) {
    var deferred = Q.defer();
    var req = superagent(method, url);
    method = method.toUpperCase();

    if (method === 'GET') {
        req = superagent.get(url);
        if (data !== undefined) req.query(data);
    } else {
        if (method !== 'POST') data['_method'] = method;
        req = superagent.post(url).send(JSON.stringify(data));
    }

    // console.log('\n' + '----------- Request -----------');
    // console.log('url: ' + url)
    // console.log('method: ' + method)
    // if (req._data) console.log('data: ' + req._data)
    // console.log('header: ' + JSON.stringify(req._header));
    req.end(deferred.makeNodeResolver());
    return deferred.promise;
}


module.exports = {
    getBusinessTypes() {
        return request('get', server.getBusinessTypes);
    },

    getCountries() {
        return request('get', server.getCountries);
    },

    getTimezones() {
        return request('get', server.getTimezones);
    },

    getVerificationCode() {
        return request('GET', server.getVerificationCode);
    },

    checkVerificationCode(code, cookie) {
        let deferred = Q.defer();
        cookie = cookie || '';
        let req = superagent('POST', server.checkVerificationCode)
            .set('Cookie', cookie)
            .send({ code: code });
        req.end(deferred.makeNodeResolver());
        return deferred.promise;
    }
};