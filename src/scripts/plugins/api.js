const $ = window.jQuery

module.exports = {
    getValidateCode() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/api/validate',
                type: 'GET',
            }).then(
                response => resolve(response),
                (xhr, status, error) => {
                    reject({ xhr, status, error })
                })
        })
    },
    login(username, password) {
        const data = { userName: username, hashedPassword: password }
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/LogIn',
                type: 'POST',
                data,
            }).then(
                response => resolve(response),
                (xhr, status, error) => {
                    reject({ xhr, status, error })
                })
        })
    },
    sendValidateCode(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/api/validate',
                type: 'POST',
                data,
                beforeSend() {
                    console.log(this)
                },
            }).then(
                (response, status, xhr) => {
                    resolve({ response, status, xhr })
                },
                (xhr, status, error) => {
                    reject({ xhr, status, error })
                })
        })
    },
    signUp(data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'http://54.169.159.192:8080/UCM/SignUp',
                type: 'POST',
                data,
                beforeSend() {
                    console.log('Send data! Please wait...')
                },
            }).then(
                response => resolve(response),
                (xmlHttpRequest, status, errorThrown) => {
                    reject({ xmlHttpRequest, status, errorThrown })
                })
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
                beforeSend() {
                    console.log('Send Upload Logo! Please wait...')
                },
            }).then(
                response => resolve(response),
                (xhr, status, error) => {
                    reject({ xhr, status, error })
                })
        })
    },
}
