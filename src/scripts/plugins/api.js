const $ = window.jQuery

module.exports = {
    createClientAccounts(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/CreateCustomerAccount',
                type: 'POST',
                data,
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    createStaffUser(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/CreateStaffUser',
                type: 'POST',
                data,
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    getValidateCode() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/api/validate',
                type: 'GET',
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    login(username, password) {
        const data = { userName: username, hashedPassword: password }
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/api/user/login',
                type: 'POST',
                data,
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    sendValidateCode(code) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/api/validate',
                type: 'POST',
                data: { code },
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    signUp(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/SignUp',
                type: 'POST',
                data,
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
    uploadLogo(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/uploadLogo',
                type: 'POST',
                data,
                processData: false,
                contentType: false,
            }).then(
                (response, status, xhr) => resolve({ response, status, xhr }),
                (xhr, status, error) => reject({ xhr, status, error }))
        })
    },
}
