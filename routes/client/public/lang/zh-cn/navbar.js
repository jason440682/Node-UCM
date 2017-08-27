module.exports = {
    nav_list: [
        {
            title: '账户客户',
            list: [
                {
                    title: '客户账户',
                    url: '/cn/accounts',
                },
                {
                    title: '新建账户',
                    url: '/cn/createAccount',
                }, {
                    title: '通知管理',
                    url: '/cn/notification',
                }, {
                    title: '文件管理',
                    url: '/cn/docManager',
                },
            ],
        },
        {
            title: '工作簿',
            list: [
                {
                    title: '工作簿',
                    url: '/cn/workbook',
                },
                {
                    title: '新建工作簿',
                    url: '/cn/createWork',
                }, {
                    title: '工作日程',
                    url: '/cn/workCalendar',
                }, {
                    title: '工作模板',
                    url: '/cn/workTemplate',
                },
            ],
        },
        {
            title: '计费与支付',
            list: [
                {
                    title: '计费与支付',
                    url: '/cn/billingPayment',
                },
                {
                    title: '新建发票',
                    url: '/cn/createInvoice',
                }, {
                    title: '发票',
                    url: '/cn/invoices',
                }, {
                    title: '付款项',
                    url: '/cn/payment',
                },
            ],
        },
        {
            title: '营销通信/通知组',
            list: [
                {
                    title: '营销通信/通知组',
                    url: '/cn/newsletter',
                },
                {
                    title: '新建通信组',
                    url: '/cn/createNewsletter',
                },
            ],
        },
        {
            title: '报告',
            list: [
                {
                    title: '报告',
                    url: '#',
                },
            ],
        },
    ],

    user_list: [
        { title: '更改账户信息', url: '/cn/modifyMaster' },
        { title: '查看员工', url: '/cn/staffUser' },
        { title: '创建新员工', url: '/cn/createStaff' },
        { title: '收费计划', url: '#' },
        { title: '用户注销', url: '/api/user/logout' },
    ],
}
