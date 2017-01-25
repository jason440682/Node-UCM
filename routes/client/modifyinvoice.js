var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data = {
        key:'modifyinvoice',
        title:'View/Modify Invoice',
        lang:require('./lang/en/modifyinvoice'),
        language:'en'
    }

    if(req.lang && req.lang == 'zh-cn'){
        data.lang = require('./lang/zh-cn/modifyinvoice');
        data.language = 'zh-cn';
    }

    res.render('client/modifyinvoice',data);
})

router.post('/',function(req,res,next){
    //表单处理请求
})

module.exports = router;