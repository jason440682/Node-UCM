import { sendValidateCode, login } from '../plugins/api'

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
            code: $('#verification-code').val(),
        })
    })
}

$input.blur((e) => {
    const $this = $(e.target)
    $this.parent().toggleClass('has-error', $this.val() === '')

    if ($this.is('#verification-code')) {
        const code = $('#verification-code').val()
        sendValidateCode(code).then((data) => {
            console.log(data)
            if (data.response === 'error') {
                $('#error').html('输入的验证码错误！请重新输入').show()
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
            Promise.all([sendValidateCode(code), login(username, password)]).then((datas) => {
                const validateCorrect = datas[0].response === 'ok'
                const logined = datas[1].response === 'Authenticated'

                if (validateCorrect && logined) {
                    location.assign('/accounts')
                } else if (!validateCorrect) {
                    $('#error').html('输入的验证码错误！请重新输入').show()
                } else if (!logined) {
                    $('#error').html('账号或密码输入错误！请重新输入').show()
                }
            }, (error) => {
                console.log(error)
                if (error.xhr.status === 401) {
                    $('#error').html('账号或密码输入错误！请重新输入').show()
                } else {
                    $('#error').html('与服务器连接出现问题！请稍后再试').show()
                }
            })
        }, (errorDOM) => {
            console.log(errorDOM)
            errorDOM.focus()
        },
    )

    return false
})
