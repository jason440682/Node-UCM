module.exports = {
    title: 'View/Modify Client Account',

    account_num: 'Account Number: ',
    account_type: 'Account Type: ',
    business_name: 'Business Name',
    business_placeholder: 'Your business name',

    account_status: 'Account Status',
    status: ['Active', 'InActive'],
    assigned_to: 'Assigned to',
    assigns: ['Staff A', 'Staff B', 'Staff C', 'Staff D'],


    contact_first_name: {
        text: 'First Name',
        placeholder: 'First Name'
    },

    contact_last_name: {
        text: 'Last Name',
        placeholder: 'Last Name'
    },

    email_address: {
        text: 'Email Address',
        placeholder: 'Your Email Address'
    },

    mobile_num: {
        text: 'Mobile Phone Number',
        placeholder: 'xxx-xxx-xxxx'
    },

    mailing_address: {
        text: 'Mailing Address',
        placeholder: {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip_code: 'Zip Code'
        },
        country: [
            'China 1',
            'China 2',
            'China 3',
            'China 4',
            'China 5'
        ]
    },

    billing_address: {
        text: 'Billing Address',
        issame: 'Same as mailing address',
        placeholder: {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip_code: 'Zip Code'
        },
        country: [
            'China 1',
            'China 2',
            'China 3',
            'China 4',
            'China 5'
        ]
    },

    account_note: {
        text: 'Account Note',
        placeholder: 'Text'
    },

    email_group: {
        text: 'Email Group',
        groups: ['email group 1', 'email group 2']
    },

    notification: {
        text: 'Notification Preference',
        email: 'Email',
        phone: 'Phone',
        sms: 'SMS'
    },

    client_portal: {
        text: 'Client Portal',
        enable: 'Enable',
        disable: 'Disable',
        btn_text: 'Send Portal Invitation'
    },

    buttons: {
        save: 'Save Changes',
        archive: 'Archive this Client',
        delete: 'Delete this Client'
    },

    list_group: [
        {text: 'Account Information', link: 'accounts'},
        {text: 'Work Book', link: 'workBook'},
        {text: 'Work Calendar', link: 'workCalendar'},
        {text: 'Notification', link: 'notification'},
        {text: 'Documents', link: 'docManager'},
        {text: 'Invoice & Payment', link: 'billingPayment'}
    ]
};
