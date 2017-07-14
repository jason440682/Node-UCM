'use strict'
import { Router } from 'express'
const router = Router();

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

router.get('/', (req, res) => {
    let lang = req.lang ? req.lang : 'en';
    let data = {
        key: 'accounts/docManager',
        language: lang,
        lang: require(`./lang/${lang}/docManager`),
        nav: require(`../public/lang/${lang}/navbar`),
        footnavbar: require(`../public/lang/${lang}/footbavbar`),
        names: data_eg.names,
        files: data_eg.files
    };

    res.render('client/accounts/docManager', data);
});

router.post('/', function (req, res, next) {
    // 这里写注册页面 POST 数据过来时要处理的逻辑
    console.log('post!');
});

module.exports = router;
