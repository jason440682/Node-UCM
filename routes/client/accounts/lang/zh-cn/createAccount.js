module.exports = {
    title: '创建新账户',
    type: '账户类型',

    personal: {
        text: '个人',
        firstname: '名字',
        lastname: '姓氏',
        placeholder: '请输入您的名字',
    },

    business: {
        text: '公司',
        name: '公司名称',
        placeholder: '请输入您的公司名称',
    },

    accountstatus: {
        text: '账户状态',
        status: ['新建', '过期'],
    },

    assignto: {
        text: '代理人',
        staff: ['Staff A', 'Staff B'],
    },

    contact_first_name: {
        text: '名字',
        placeholder: '名字',
    },

    contact_last_name: {
        text: '姓氏',
        placeholder: '姓氏',
    },

    email_address: {
        text: '邮箱',
        placeholder: '请输入您的邮箱地址',
    },

    mobile_num: {
        text: '电话号码',
        placeholder: 'xxx-xxx-xxxx',
    },

    mailing_address: {
        text: '邮寄地址',
        placeholder: {
            street: '街',
            city: '市',
            state: '国',
            zip_code: '邮政编码',
        },
        country: [
            '中国地区 1',
            '中国地区 2',
            '中国地区 3',
            '中国地区 4',
            '中国地区 5',
        ],
    },

    billing_address: {
        text: '商品寄送地址',
        issame: '同邮寄地址',
        placeholder: {
            street: '街',
            city: '市',
            state: '国',
            zip_code: '邮政编码',
        },
        country: [
            '中国地区 1',
            '中国地区 2',
            '中国地区 3',
            '中国地区 4',
            '中国地区 5',
        ],
    },

    account_note: {
        text: '备注',
        placeholder: '备注',
    },

    email_group: {
        text: '邮箱组',
        groups: ['email group 1', 'email group 2'],
    },

    notification: {
        text: '通知方式',
        email: '邮箱',
        phone: '电话',
        sms: 'SMS',
    },

    client_portal: {
        text: '账户通道',
        enable: '开启',
        disable: '关闭',
        btn_text: '发送邀请函',
    },

    submit_btn: '创建',
}
