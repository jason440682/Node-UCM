module.exports = {
    title: 'Create Client Account',
    type: 'Account Type',

    personal: {
        text: 'Personal',
        firstname: 'First Name',
        lastname: 'Last Name',
        placeholder: 'Text',
    },

    business: {
        text: 'Business',
        name: 'Business Name',
        placeholder: 'Text',
    },

    accountstatus: {
        text: 'Account Status',
        status: ['new', 'out of date'],
    },

    assignto: {
        text: 'Assign To',
        staff: ['Staff A', 'Staff B'],
    },

    contact_first_name: {
        text: 'Contact First Name',
        placeholder: 'First Name',
    },

    contact_last_name: {
        text: 'Contact Last Name',
        placeholder: 'Last Name',
    },

    email_address: {
        text: 'Email Address',
        placeholder: 'Your Email Address',
    },

    mobile_num: {
        text: 'Mobile Phone Number',
        placeholder: 'xxx-xxx-xxxx',
    },

    mailing_address: {
        text: 'Mailing Address',
        placeholder: {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip_code: 'Zip Code',
        },
        country: [
            'China 1',
            'China 2',
            'China 3',
            'China 4',
            'China 5',
        ],
    },

    billing_address: {
        text: 'Billing Address',
        issame: 'Same as mailing address',
        placeholder: {
            street: 'Street',
            city: 'City',
            state: 'State',
            zip_code: 'Zip Code',
        },
        country: [
            'China 1',
            'China 2',
            'China 3',
            'China 4',
            'China 5',
        ],
    },

    account_note: {
        text: 'Account Note',
        placeholder: 'Text',
    },

    email_group: {
        text: 'Email Group',
        groups: ['email group 1', 'email group 2'],
    },

    notification: {
        text: 'Notification Preference',
        email: 'Email',
        phone: 'Phone',
        sms: 'SMS',
    },

    client_portal: {
        text: 'Client Portal',
        enable: 'Enable',
        disable: 'Disable',
        btn_text: 'Send Portal Invitation',
    },

    submit_btn: 'Create Client Account',
}
