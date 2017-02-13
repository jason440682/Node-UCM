var express = require('express');
router = express.Router();

router.get('/',function(req,res,next){
    var data={
        key:'billingpayment',
        title:'Invoices & Payment',
        language:'en',
        lang: require('./lang/en/billingpayment')
    };

    if(req.lang && req.lang == 'zh-cn'){
        data.lang =require('./lang/zh-cn/billingpayment');
        data.language = 'zh-cn'
    } 

    res.render('client/billingPayment/billingPayment',data);
});

router.post('/',function(req,res,next){
    //表单处理逻辑
});

module.exports = router;