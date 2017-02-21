module.exports = {
    title: '查看/编辑账户',

    account_num: '账户账号: ',
    account_type: '账户类型: ',
    business_name: '公司名称',
    business_placeholder: '请输入公司名称',

    account_status: '账户状态',
    status: ['新建', '过期'],
    assigned_to: '代理人',
    assigns: ['职员 A', '职员 B', '职员 C', '职员 D'],


    contact_first_name: {
        text: '名字',
        placeholder: '名字'
    },

    contact_last_name: {
        text: '姓氏',
        placeholder: '姓氏'
    },

    email_address: {
        text: '邮箱',
        placeholder: '请输入您的邮箱地址'
    },

    mobile_num: {
        text: '电话号码',
        placeholder: 'xxx-xxx-xxxx'
    },

    mailing_address: {
        text: '邮寄地址',
        placeholder: {
            street: '街',
            city: '市',
            state: '国',
            zip_code: '邮政编码'
        },
        country: [
            '中国地区 1',
            '中国地区 2',
            '中国地区 3',
            '中国地区 4',
            '中国地区 5'
        ]
    },

    billing_address: {
        text: '商品寄送地址',
        issame: '同邮寄地址',
        placeholder: {
            street: '街',
            city: '市',
            state: '国',
            zip_code: '邮政编码'
        },
        country: [
            '中国地区 1',
            '中国地区 2',
            '中国地区 3',
            '中国地区 4',
            '中国地区 5'
        ]
    },

    account_note: {
        text: '备注',
        placeholder: '备注'
    },

    email_group: {
        text: '邮箱组',
        groups: ['email group 1', 'email group 2']
    },

    notification: {
        text: '通知方式',
        email: '邮箱',
        phone: '电话',
        sms: 'SMS'
    },

    client_portal: {
        text: '账户通道',
        enable: '开启',
        disable: '关闭',
        btn_text: '发送邀请函'
    },

    buttons: {
        save: '保存更改',
        archive: '保存该客户',
        delete: '删除该客户'
    },

    list_group: [
        {text: '账户信息', link: 'accounts'},
        {text: '工作簿', link: 'workBook'},
        {text: '工作日程', link: 'workCalendar'},
        {text: '通知管理', link: 'notification'},
        {text: '文件管理', link: 'docManager'},
        {text: '发票与付款', link: 'billingPayment'}
    ]
};
