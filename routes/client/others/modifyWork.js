var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data = {
        key:'others/modifyWork',
        title:'View/Modify Work',
        language:'en',
        lang:require('./lang/en/modifyWork'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar')
    };

    if(req.lang && req.lang=='zh-cn'){
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/modifyWork');
    }

    res.render('client/others/modifyWork',data);
});

router.post('/',function(req,res,next){
    //处理表单提交回来数据
});

module.exports = router;
