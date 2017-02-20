module.exports = {
    nav_list: [
        {
            title: '账户客户',
            list: [
                {
                    title: '客户账户',
                    url: './accounts'
                },
                {
                    title: '新建账户',
                    url: './createAccount'
                }, {
                    title: '通知管理',
                    url: './notification'
                }, {
                    title: '文件管理',
                    url: './docManager'
                }
            ]
        },
        {
            title: '工作簿',
            list: [
                {
                    title: '工作簿',
                    url: './workbook'
                },
                {
                    title: '新建工作簿',
                    url: './createWork'
                }, {
                    title: '工作日程',
                    url: './workCalendar'
                }, {
                    title: '工作模板',
                    url: './workTemplate'
                }
            ]
        },
        {
            title: '计费与支付',
            list: [
                {
                    title: '计费与支付',
                    url: './billingPayment'
                },
                {
                    title: '新建发票',
                    url: './createInvoice'
                }, {
                    title: '发票',
                    url: './invoices'
                }, {
                    title: '付款项',
                    url: './payment'
                }
            ]
        },
        {
            title: '营销通信/通知组',
            list: [
                {
                    title: '营销通信/通知组',
                    url: './newsletter'
                },
                {
                    title: '新建通信组',
                    url: './createNewsletter'
                }
            ]
        },
        {
            title: '报告',
            list: [
                {
                    title: '报告',
                    url: '#'
                }
            ]
        }
    ],

    user: {
        management: '用户管理',
        plan: '收费计划',
        logout: '用户注销'
    }
};
