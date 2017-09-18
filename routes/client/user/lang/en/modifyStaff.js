module.exports = {
    title: 'Modify Staff User',
    user_id: 'Staff ID: ',
    business_id: 'Business ID: ',
    uploaded_logo: 'Uploaded Business Logo',

    username: {
        text: 'Username: ',
        placeholder: 'Text',
    },

    password: {
        text: 'Password',
        placeholder: 'password here',
    },

    confirm: {
        text: 'Confirm Password',
        placeholder: 'confirm please!',
    },

    question: {
        text: 'Security Question',
        placeholder: 'set your question',
    },

    answer: {
        text: 'Security Question Answer',
        placeholder: 'The answer of the question',
    },

    auto_login: {
        text: 'Enable Two-Factor Authentication Login',
        yes: 'Yes',
        no: 'No',
    },

    send_code: {
        text: 'Send passcode to',
        mobile: 'Mobile Phone',
        email: 'Email',
    },

    first_name: {
        text: 'First Name',
        placeholder: 'First Name',
    },

    last_name: {
        text: 'Last Name',
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

    other_num: {
        text: 'Other Phone Number',
        placeholder: 'xxx-xxx-xxxx',
    },

    job_title: {
        text: 'Job Title',
        placeholder: 'Text',
    },

    department: {
        text: 'Department/Division',
        departments: [
            { key: 1, value: 'Billing Department 1' },
            { key: 2, value: 'Billing Department 2' },
            { key: 3, value: 'Billing Department 3' },
            { key: 4, value: 'Billing Department 4' },
            { key: 5, value: 'Billing Department 5' },
        ],
    },

    time_zone: {
        text: 'Work Time Zone',
        timeZones: [
            'US Pacific Time 1',
            'US Pacific Time 2',
            'US Pacific Time 3',
            'US Pacific Time 4',
            'US Pacific Time 5',
        ],
    },

    work_email: {
        text: 'Work Email',
        placeholder: 'Text',
    },

    office_phone: {
        text: 'Office Phone Number',
        placeholder: 'Text',
    },

    office_address: {
        text: 'Office Address',
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

    user_note: {
        text: 'User Note',
        placeholder: 'Text',
    },

    photo: {
        text: 'Personal Photo',
        placeholder: 'Upload',
    },

    submit_btn: {
        text: 'Add Staff',
    },

    buttons: {
        save: 'Save changes',
        archive: 'Archive this master',
        delete: 'Delete master',
    },

    list_group: [
        { text: 'Account Information', link: 'accounts' },
        { text: 'Work Book', link: 'workBook' },
        { text: 'Work Calendar', link: 'workCalendar' },
        { text: 'Notification', link: 'notification' },
        { text: 'Documents', link: 'docManager' },
        { text: 'Invoice & Payment', link: 'billingPayment' },
    ],
}
