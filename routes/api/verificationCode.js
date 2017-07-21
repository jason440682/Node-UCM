var router = require('express').Router();
var requests = require('../plugins/requests');

router.get('/', (req, res) => {
    requests.getVerificationCode().then(function (response) {
        var cookies = response.header['set-cookie'];
        req.session.name = cookies[1].split(';')[0];
        console.log('JSESSIONID: ' + req.session.name);
        res.send(response.body);
    })
});

router.post('/', (req, res) => {
    console.log(req.body.code);
    console.log(req.session.name);
    requests.checkVerificationCode(req.body.code, req.session.name).then((response) => {
        res.send(response.text);
    }, (error) => {
        console.log('failed!');
        console.log(error);
        res.send('error');
    })
});

module.exports = router;