var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data = {
        key:'workcalendar',
        title:'Work Calendar',
        language:'en',
        lang:require('./lang/en/workcalendar')
    }

    if(req.lang && req.lang=='zh-cn'){
        data.language='zh-cn';
        data.lang=require('./lang/zh-cn/workcalendar')
    }

    res.render('client/workcalendar',data);
        
})

router.post('/',function(req,res,next){
    //表单处理逻辑
})

module.exports = router;