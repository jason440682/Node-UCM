var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data ={
        key:'createnewsletter',
        title:'Create Newsletter/Group Notification',
        language:'en',
        lang:require('./lang/en/creatework')
    }

    if(req.lang && req.lang=='zh-cn'){
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/creatework');
    }
    
    res.render('client/creatework',data);
})

router.post('/',function(req,res,next){
    //表单处理逻辑
})

module.exports = router;