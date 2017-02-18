var express = require('express');
var router = express.Router();

router.use('/',function(req,res,next){
    var data = {
        key:'notification',
        title:'Notification Manager',
        language:'en',
        lang:require('./lang/en/notification')
    }
    if(req.lang && req.lang == 'zh-cn'){
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/notification');
    }
    res.render('client/notification',data);  
});

router.post('/',function(req,res,next){
    //表单post过来的数据处理逻辑
});

module.exports = router;