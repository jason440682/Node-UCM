module.exports = {
    title: '查看/编辑工作',
    workid: '工作ID: 000539',

    work: {
        text: '工作',
        placeholder: '工作'
    },

    status: {
        text: '状态',
        statuses: ['状态1', '状态2']
    },

    assignee: {
        text: '负责员工',
        assignees: ['自己', '其他']
    },

    date: {
        text: '日期',
        repeat: '重复',
        enddate: '结束日期',
        frequency: ['3个月/次', '6个月/次', '1年/次'],
        never: '一直'
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
        contacts: ['联系人1', '联系人2']
    },

    description: {
        text: '详情',
        placeholder: '详情'
    },

    document: {
        text: '工作文件',
        placeholder: '文件路径',
        button: '上传',
        thname: '名字',
        thdate: '上传日期'
    },

    billable: {
        text: '是否计费',
        yes: '是',
        no: '否'
    },

    billingrate: {
        text: '费率',
        rates: ['$200/hour', '$400/hour']
    },

    invoicestatus: {
        text: '发票状态',
        statuses: ['未支付', '已支付'],
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
        sms: 'Sms'
    },

    remindermes: {
        text: '提醒信息',
        placeholder: '提醒信息'
    },
    buttons: {
        update: '更新工作任务',
        delete: '删除'
    }
};
