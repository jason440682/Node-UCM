module.exports = {
    nav_list: [
        {
            title: 'Client Accounts',
            list: [
                { title: 'Client Accounts', url: '/en/accounts' },
                { title: 'Create Client Account', url: '/en/createAccount' },
                { title: 'Notification Manager', url: '/en/notification' },
                { title: 'Document Manager', url: '/en/docManager' },
            ],
        },
        {
            title: 'Work Book',
            list: [
                { title: 'Work Book', url: '/en/workbook' },
                { title: 'Create New Work', url: '/en/creatework' },
                { title: 'Work Calendar', url: '/en/workcalendar' },
                { title: 'Work Template', url: '/en/worktemplate' },
            ],
        },
        {
            title: 'Billing & Payment',
            list: [
                { title: 'Billing & Payment', url: '/en/billingpayment' },
                { title: 'Create New Invoice', url: '/en/createinvoice' },
                { title: 'Invoices', url: '/en/invoices' },
                { title: 'Payments', url: '/en/payment' },
            ],
        },
        {
            title: 'Marketing',
            list: [
                { title: 'Marketing', url: '/en/newsletter' },
                { title: 'Create Newsletter', url: '/en/createnewsletter' },
            ],
        },
        {
            title: 'Reports',
            list: [
                { title: 'Reports', url: '#' },
            ],
        },
    ],

    user_list: [
        { title: 'Modify Master User', url: '/en/modifyMaster' },
        { title: 'Staff User', url: '/en/staffUser' },
        { title: 'Create Staff User', url: '/en/createStaff' },
        { title: 'Plan and Billing', url: '#' },
        { title: 'Log Out', url: '/api/user/logout' },
    ],
}
