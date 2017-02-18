module.exports = {
   
    title: '查看/编辑发票',
    
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
    
    invoice_date:{
        text:'发票日期'
    },

    client:{
        text:'客户',
        names:['James Johnson','Payment Reminder','Payment Reminder2']
    },
    
    bill_to:{
        number:'发票编号:000394',
        text:'收款人:',
        date:'发票日期: 2017/1/24',
        name:'James Johnson',
        address:'123 ABC Street,Good City,CA9001'
    },
    
    thead:{
        work_number:'工作编号',
        description:'详情',
        time:'日期 & 时间',
        duration:'持续时间',
        rate:'费率',
        subtotal:'总金额',
        work_status:'工作状态',
        edit:'编辑'
    },
    invoices:[
         {
            work_number:'Work Number',
            description:'Description',
            time:'Date & Time',
            duration:'Duration',
            rate:'Rate',
            subtotal:'Subtotal',
            work_status:'Work Status',
            edit:'Edit'
        },
       {
            work_number:'Work Number',
            description:'Description',
            time:'Date & Time',
            duration:'Duration',
            rate:'Rate',
            subtotal:'Subtotal',
            work_status:'Work Status',
            edit:'Edit'
        },
        {
           work_number:'Work Number',
            description:'Description',
            time:'Date & Time',
            duration:'Duration',
            rate:'Rate',
            subtotal:'Subtotal',
            work_status:'Work Status',
            edit:'Edit'
        }
    ],

    btn_groups:{
        manual_edit:'手动编辑',
        save:'保存',
        both:'保存并发送',
        cancel:'删除'
    },

    footnavbar:{
        help:'支持与帮助',
        manual:'说明手册',
        forum:'讨论',
        privacy:'隐私策略',
        service:'服务条件'
    }
       
   
};
