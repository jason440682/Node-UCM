import { sendValidateCode, login } from '../plugins/api'
import { User } from '../plugins/db'

const lang = /^\/(.*?)\//.exec(location.pathname)[1]
const $ = window.jQuery
const $input = $('form :input.form-control')

// 验证表单
function validateForm() {
    $input.trigger('blur')
    return new Promise((resolve, reject) => {
        const $requiredInputs = $('form .has-error')
        if ($requiredInputs.length > 0) reject($requiredInputs[0])
        resolve({
            username: $('#username').val(),
            password: $('#password').val(),
            code: $('#verification-code').val().toUpperCase(),
        })
    })
}

$input.blur((e) => {
    const $this = $(e.target)
    const value = $this.val()
    $this.parent().toggleClass('has-error', value === '')

    if (value && $this.is('#verification-code')) {
        const code = $('#verification-code').val().toUpperCase()
        sendValidateCode(code).then((data) => {
            console.log(data)
            if (data.response === 'error') {
                $('#error').html(`输入的验证码错误！请重新输入(${code})`).show()
            } else if ($('#error').html() === '输入的验证码错误！请重新输入') {
                $('#error').hide()
            }
        }, (error) => {
            console.log(error)
            $('#error').html('与服务器连接出现问题！请稍后再试').show()
        })
    }
})

$('#submit').click(() => {
    validateForm().then(
        ({ username, password, code }) => {
            sendValidateCode(code).then(({ response }) => {
                if (response !== 'ok') throw new Error(`输入的验证码错误！请重新输入(${code})`)
                return login(username, password)
            }).then(({ response }) => {
                if (response === 'Authenticated') {
                    User.set('userName', username)
                    location.assign(`/${lang}/accounts`)
                } else if (response.status === 401) {
                    throw new Error('账号或密码输入错误！请重新输入')
                }
            }).catch((error) => {
                console.error(error)
                $('#error').html(error.message).show()
            })
        }, (errorDOM) => {
            console.log(errorDOM)
            errorDOM.focus()
        })

    return false
})
