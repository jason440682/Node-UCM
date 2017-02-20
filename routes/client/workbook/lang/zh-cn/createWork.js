module.exports = {
    title: '创建工作',
    template: '使用工作模板',

    work: {
        text: '工作名',
        placeholder: '工作名'
    },

    status: {
        text: '状态',
        statuses: ['状态 1', '状态 2']
    },

    assignee: {
        text: '代理人',
        assignees: ['我的代理人', '其他人的代理人']
    },

    date: {
        text: '日期',
        repeat: '是否重复',
        enddate: '结束日期',
        frequency: ['3个月一次', '6个月一次', '1年一次'],
        never: '永不停止'
    },

    time: {
        text: '时间',
        placeholder: '时间',
        duration: '持续时间',
        durationtime: ['2小时', '4小时', '1天']
    },

    location: {
        text: '地点',
        placeholder: '地点'
    },

    contact: {
        text: '客户联系人',
        contacts: ['客户联系人1', '客户联系人2']
    },

    description: {
        text: '详情',
        placeholder: '详情'
    },

    document: {
        text: '工作文档',
        placeholder: '文件路径',
        button: '上传',
        thname: '文件名',
        thdate: '上传日期'
    },

    billiable: {
        text: '是否计费',
        yes: '是',
        no: '否'
    },

    billingrate: {
        text: '费率',
        rates: ['$200/小时', '$400/小时']
    },

    invoicestatus: {
        text: '发票状态',
        statuses: ['未支付', '支付'],
        number: '发票编号',
        truenum: '000387'
    },

    autoreminder: {
        text: '自动提醒',
        notifyclient: '提醒客户联系人',
        notifystaff: '提醒代理员工',
        reminder: '提醒机制',
        time: ['1天', '10天', '1个月'],
        email: '邮箱',
        phone: '手机',
        sms: 'SMS'
    },

    remindermes: {
        text: '提醒信息',
        placeholder: '提醒信息'
    },

    buttons: {
        work: '创建公祖',
        invoice: '创建发票',
        both: '创建并寄出发票'
    }
};
