var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data ={
        key:'createnewsletter',
        title:'Create Newsletter/Group Notification',
        language:'en',
        lang:require('./lang/en/createnewsletter'),
        nav: require('../public/lang/en/navbar')
    };

    if(req.lang && req.lang=='zh-cn'){
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/createnewsletter');
    }
    
    res.render('client/marketing/createNewsletter',data);
})

router.post('/',function(req,res,next){
    //表单处理逻辑
})

module.exports = router;