var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data = {
        key:'createinvoice',
        title:'Create New Invoice',
        lang:require('./lang/en/createinvoice'),
        language:'en'
    }

    if(req.lang && req.lang == 'zh-cn'){
        data.lang = require('./lang/zh-cn/createinvoice');
        data.language = 'zh-cn';
    }

    res.render('client/createinvoice',data);
})

router.post('/',function(req,res,next){
    //表单处理请求
})

module.exports = router;