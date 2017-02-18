module.exports = {
    title: '创建工作',
    
    username:{
        text:'用户名'
    },

    client_accounts: {
        text: '客户账户',
    },

    work_book: {
        text: '工作簿',
    },

    billing_payment: {
        text: '计费与付款',
    },

    marketing: {
        text: '销售',
    },

    reports: {
        text: '报告',
    },

    template:{
        text:'使用工作模板'
    },

    work:{
        text:'工作名',
        placeholder:'工作名'
    },

    status:{
        text:'状态',
        statuses:['Status 1','Status 2']
    },

    assignee:{
        text:'代理人',
        assignees:['Assignee to me','Assignee to others']
    },

    date:{
        text:'日期',
        repeat:'是否重复',
        enddate:'结束日期',
        frequency:['Every 3 month','Every 6 month','Every 1 year'],
        never:'Never End'
    },

    time:{
        text:'时间',
        placeholder:'时间',
        duration:'持续时间',
        durationtime:['2 hour','4 hour','1 day']
    },

    location:{
        text:'地点',
        placeholder:'地点'
    },

    contact:{
        text:'客户联系人',
        contacts:['client contact 1','client contact 2']
    },

    description:{
        text:'详情',
        placeholder:'详情'
    },

    document:{
        text:'工作文档',
        placeholder:'文件路径',
        button:'上传',
        thname:'文件名',
        thdate:'上传日期'
    },

    billiable:{
        text:'是否计费',
        yes:'是',
        no:'否'
    },

    billingrate:{
        text:'费率',
        rates:['$200/hour','$400/hour']
    },

    invoicestatus:{
        text:'发票状态',
        statuses:['未支付','支付'],
        number:'发票编号',
        truenum:'000387'
    },

    autoreminder:{
        text:'自动提醒',
        notifyclient:'提醒客户联系人',
        notifystaff:'提醒代理员工',
        reminder:'提醒机制',
        time:['1 day','10 day','1 month'],
        email:'邮箱',
        phone:'手机',
        sms:'Sms'
    },

    remindermes:{
        text:'提醒信息',
        placeholder:'提醒信息'
    },

    buttons:{
        work:'创建公祖',
        invoice:'创建发票',
        both:'创建并寄出发票'
    },

   
    footnavbar:{
        help:'支持与帮助',
        manual:'说明手册',
        forum:'讨论',
        privacy:'隐私策略',
        service:'服务条件'
    }
}