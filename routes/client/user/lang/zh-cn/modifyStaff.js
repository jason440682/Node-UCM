module.exports = {
    title: '更改账户信息',
    user_id: '账户 ID: ',
    business_id: '公司 ID: ',
    uploaded_logo: '已上传的公司 Logo',

    username: {
        text: '用户名',
        placeholder: '请输入用户名',
    },

    password: {
        text: '密码',
        placeholder: '请输入密码',
    },

    confirm: {
        text: '重复输入密码',
        placeholder: '请再次输入密码',
    },

    question: {
        text: '设置密保问题',
        placeholder: '请设置您的问题',
    },

    answer: {
        text: '设置密保答案',
        placeholder: '请设置您的答案',
    },

    auto_login: {
        text: '使用双重认证登录',
        yes: '是',
        no: '否',
    },

    send_code: {
        text: '验证码发送至',
        mobile: '手机',
        email: '邮箱',
    },

    first_name: {
        text: '名字',
        placeholder: '名字',
    },

    last_name: {
        text: '姓氏',
        placeholder: '姓氏',
    },

    email_address: {
        text: '邮箱',
        placeholder: '邮箱',
    },

    mobile_num: {
        text: '手机号',
        placeholder: 'xxx-xxx-xxxx',
    },

    other_num: {
        text: '其他手机号',
        placeholder: 'xxx-xxx-xxxx',
    },

    job_title: {
        text: '工作名',
        placeholder: '工作名',
    },

    department: {
        text: '部门/分组',
        departments: [
            { key: 1, value: '部门 1' },
            { key: 2, value: '部门 2' },
            { key: 3, value: '部门 3' },
            { key: 4, value: '部门 4' },
            { key: 5, value: '部门 5' },
        ],
    },

    time_zone: {
        text: '工作时区',
        timeZones: [
            '美国时区 1',
            '美国时区 2',
            '美国时区 3',
            '美国时区 4',
            '美国时区 5',
        ],
    },

    work_email: {
        text: '工作邮箱',
        placeholder: '工作邮箱',
    },

    office_phone: {
        text: '办公室电话',
        placeholder: '办公室电话',
    },

    office_address: {
        text: '办公室地址',
        placeholder: {
            street: '街',
            city: '市',
            state: '区',
            zip_code: '邮政编码',
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
        text: '使用备注',
        placeholder: 'Text',
    },

    photo: {
        text: '个人照片',
        placeholder: '上传',
    },

    submit_btn: {
        text: '新增员工',
    },

    buttons: {
        save: '保存更改',
        archive: '临时保存该账户',
        delete: '删除该账户',
    },

    list_group: [
        { text: '账户信息', link: 'accounts' },
        { text: '工作簿', link: 'workBook' },
        { text: '工作日程', link: 'workCalendar' },
        { text: '通知管理', link: 'notification' },
        { text: '文件管理', link: 'docManager' },
        { text: '发票与付款', link: 'billingPayment' },
    ],
}
