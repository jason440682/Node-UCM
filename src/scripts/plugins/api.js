const $ = window.jQuery

function ajax(options) {
    return new Promise((resolve, reject) => {
        $.ajax(options).then(
            (response, status, xhr) => resolve({ response, status, xhr }),
            (xhr, status, error) => reject({ xhr, status, error }))
    })
}

module.exports = {
    createClientAccounts(data) {
        return ajax({
            url: '/UCM/CreateCustomerAccount',
            type: 'POST',
            data,
        })
    },
    createStaffUser(data) {
        return ajax({
            url: '/UCM/CreateStaffUser',
            type: 'POST',
            data,
        })
    },
    getValidateCode() {
        return ajax({
            url: '/api/validate',
            type: 'GET',
        })
    },
    login(username, password) {
        const data = { userName: username, hashedPassword: password }
        return ajax({
            url: '/api/user/login',
            type: 'POST',
            data,
        })
    },
    sendValidateCode(code) {
        return ajax({
            url: '/api/validate',
            type: 'POST',
            data: { code },
        })
    },
    signUp(data) {
        return ajax({
            url: '/UCM/SignUp',
            type: 'POST',
            data,
        })
    },
    uploadLogo(data) {
        return ajax({
            url: '/UCM/uploadLogo',
            type: 'POST',
            data,
            processData: false,
            contentType: false,
        })
    },
    saveClientChange(data) {
        return ajax({
            url: '/UCM/ModifyCustomerAccount',
            type: 'POST',
            data,
        })
    },
    deleteClient(userName, customerId) {
        const data = { userName, customerId }
        return ajax({
            url: '/UCM/DeleteClient',
            type: 'POST',
            data,
        })
    },
    saveMasterChange(data) {
        return ajax({
            url: '/UCM/ModifyMasterUser',
            type: 'POST',
            data,
        })
    },
}
