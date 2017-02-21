var express = require('express');
var router = express.Router();

var data_eg = {
    names: ['James Johnson', 'Payment Reminder', 'Payment Reminder2'],
    files: [
        {type: 'folder', name: 'folder1', list: [
            {type: 'folder', name: 'file1-1', list: [
                {type: 'file', name: 'file1-1-1'},
                {type: 'file', name: 'file1-1-2'},
                {type: 'file', name: 'file1-1-3'},
                {type: 'file', name: 'file1-1-4'}
            ]},
            {type: 'file', name: 'file1-2'},
            {type: 'file', name: 'file1-3'}
        ]},
        {type: 'folder', name: 'folder2', list: [
            {type: 'file', name: 'file2-1'},
            {type: 'file', name: 'file2-2'},
            {type: 'file', name: 'file2-3'}
        ]},
        {type: 'folder', name: 'folder3', list: [
            {type: 'file', name: 'file3-1'},
            {type: 'file', name: 'file3-2'},
            {type: 'file', name: 'file3-3'}
        ]},
        {type: 'file', name: 'file2'},
        {type: 'file', name: 'file3'},
        {type: 'file', name: 'file4'}
    ]
};

router.get('/', function (req, res, next) {
    var data = {
        key: 'accounts/docManager',

        language: 'en',
        lang: require('./lang/en/docManager'),
        nav: require('../public/lang/en/navbar'),
        footnavbar: require('../public/lang/en/footbavbar'),

        names: data_eg.names,
        files: data_eg.files
    };

    if (req.lang && req.lang == 'zh-cn') {
        data.language = 'zh-cn';
        data.lang = require('./lang/zh-cn/docManager');
        data.nav = require('../public/lang/zh-cn/navbar');
        data.footnavbar = require('../public/lang/zh-cn/footnavbar');
    }

    res.render('client/accounts/docManager', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
    console.log('post!');
});

module.exports = router;
