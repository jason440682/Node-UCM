var express = require('express');
var router = express.Router();

router.get('/clientaccounts', function (req, res, next) {
    var data = {
        key: 'clientaccounts',
        title: 'Clent Account',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/clientaccounts', data);
});

router.get('/clientaccounts/en',function(req,res,next){
    var data = {
        key: 'clientaccounts',
        title: 'Client Accounts',
        language: 'en',
        lang: require('./lang/en') 
    };

    res.render('users/clientaccounts',data);
})

router.get('/clientaccounts/zh',function(req,res,next){
    var data = {
        key: 'clientaccounts',
        title: 'Client Accounts',
        language: 'en',
        lang: require('.lang/zh') 
    };

    res.render('users/clientaccounts',data);
})

module.exports = router;