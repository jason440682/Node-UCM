var superagent = require('superagent');
var http = require('http')
var Q = require('q');

var domain = '54.169.159.192';
var port = '8080';
var path = '/UCM/';
var host = 'http://' + domain + ':' + port + path;
var server = {
    user: host + 'user',
    getVerificationCode: host + 'getVerificationCode',
    checkVerificationCode: host + 'checkVerificationCode',
    test: 'http://localhost:3331/en/login/test'
};


function request(method, url, data) {
    var deferred = Q.defer();
    var req = superagent(method, url);
    method = method.toUpperCase();
    
    if (method === 'GET') {
        req = superagent.get(url);
        if (data !== undefined) req.query(data);
    } else {
        req = superagent.post(url).send(JSON.stringify(data));
    }

    console.log('\n' + '----------- Request -----------');
    console.log('url: ' + url)
    console.log('method: ' + method)
    console.log('data: ' + req._data)
    console.log('header: ' + JSON.stringify(req._header));
    req.end(deferred.makeNodeResolver());
    return deferred.promise;
}


module.exports = {
    test: function (method, data, userId) {
        var url = server.user;
        var data = data || {
            'idP': 9,
            'lastName': "Stone123",
            'firstName': "Li",
            'address': "TKH",
            'city': "Guangzhou"
        };
        userId = userId || 5;
        method = method.toUpperCase();
        if (method === 'GET') {
            return request(method, url);
        } else if (method === 'PUT' || method === 'DELETE') {
            url = url + '/' + userId;
            data['_method'] = method;
            method = 'post';
        }

        return request(method.toLowerCase(), url, data);
    },

    getVerificationCode: function () {
        return request('GET', server.getVerificationCode);
    },

    checkVerificationCode: function (code, cookie) {
        var deferred = Q.defer();
        cookie = cookie || '';
        var req = superagent('POST', server.checkVerificationCode)
            .set('Cookie', cookie)
            .send({ code: code });
        req.end(deferred.makeNodeResolver());
        return deferred.promise;
    }
};