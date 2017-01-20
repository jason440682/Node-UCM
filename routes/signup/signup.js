var express = require('express');
var router = express.Router();

router.get('/signup', function (req, res, next) {
    var data = {
        key: 'signup',
        title: 'Sign UP',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/signup', data);
});

router.get('/signup/en',function(req,res,next){
    var data = {
        key: 'signup',
        title: 'Sign Up',
        language: 'en',
        lang: require('./lang/en') 
    };

    res.render('users/signup',data);
})

router.get('/signup/zh',function(req,res,next){
    var data = {
        key: 'signup',
        title: 'Sign Up',
        language: 'en',
        lang: require('.lang/zh') 
    };

    res.render('users/signup',data);
})

module.exports = router;