var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data = {
        key:'payment',
        title:'Payments',
        language:'en',
        lang:require('./lang/en/payment')
    }
    if (req.lang && req.lang=='zh-cn'){
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/payment');
    }        

    res.render('client/payment',data);
});

router.post('/',function(req,res,next){
    //表单处理逻辑
})

module.exports = router;