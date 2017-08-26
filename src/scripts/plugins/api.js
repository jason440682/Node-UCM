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
            url: 'http://54.169.159.192:8080/UCM/CreateCustomerAccount',
            type: 'POST',
            data,
        })
    },
    createStaffUser(data) {
        return ajax({
            url: 'http://54.169.159.192:8080/UCM/CreateStaffUser',
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
            url: 'http://54.169.159.192:8080/UCM/SignUp',
            type: 'POST',
            data,
        })
    },
    uploadLogo(data) {
        return ajax({
            url: 'http://54.169.159.192:8080/UCM/uploadLogo',
            type: 'POST',
            data,
            processData: false,
            contentType: false,
        })
    },
    saveClientChange(data) {
        return ajax({
            url: 'http://54.169.159.192:8080/UCM/ModifyCustomerAccount',
            type: 'POST',
            data,
        })
    },
    deleteClient(userName, customerId) {
        const data = { userName, customerId }
        console.log(data)
        return ajax({
            url: 'http://54.169.159.192:8080/UCM/DeleteClient',
            type: 'POST',
            data,
        })
    },
}
