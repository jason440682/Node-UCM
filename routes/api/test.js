var router = require('express').Router();
var requests = require('../plugins/requests');

router.get('/', function(req, res, next) {
    console.log('Test: ')
    console.log(req.headers);
    console.log(req.body);
    res.send({
        code: 200,
        msg: 'success!'
    })
});

router.post('/', function(req, res, next) {
    console.log('Test: ')
    console.log(req.headers);
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;