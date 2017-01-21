var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    var data = {
        key: 'login',
        title: 'Log In',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/login', data);
});

router.get('/login/en',function(req,res,next){
    var data = {
        key: 'login',
        title: 'Log In',
        language: 'en',
        lang: require('./lang/en') 
    };

    res.render('users/login',data);
})

router.get('/login/zh',function(req,res,next){
    var data = {
        key: 'login',
        title: 'Log In',
        language: 'en',
        lang: require('.lang/zh') 
    };

    res.render('users/login',data);
})

module.exports = router;