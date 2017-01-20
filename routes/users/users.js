var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/register', data);
});

router.get('/en', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'en',
        lang: require('./lang/en')
    };

    res.render('users/register', data);
});

router.get('/zh', function (req, res, next) {
    var data = {
        key: 'register',
        title: 'Register',
        language: 'zh-CN',
        lang: require('./lang/zh')
    };

    res.render('users/register', data);
});


/*
*Sign Up
*/
// router.get('/signup', function (req, res, next) {
//     var data = {
//         key: 'signup',
//         title: 'Sign UP',
//         language: 'en',
//         lang: require('../signup/lang/en')
//     };

//     res.render('users/signup', data);
// });

// router.get('/signup/en',function(req,res,next){
//     var data = {
//         key: 'signup',
//         title: 'Sign Up',
//         language: 'en',
//         lang: require('../signup/lang/en') 
//     };

//     res.render('users/signup',data);
// })

// router.get('/signup/zh',function(req,res,next){
//     var data = {
//         key: 'signup',
//         title: 'Sign Up',
//         language: 'en',
//         lang: require('../signup/zh') 
//     };

//     res.render('users/signup',data);
// })

module.exports = router;
