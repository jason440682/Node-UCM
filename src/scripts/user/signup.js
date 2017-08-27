import { uploadLogo, signUp, login, sendValidateCode } from '../plugins/api'

const lang = /^\/(.*?)\//.exec(location.pathname)[1]
const $ = window.jQuery
const $input = $('form :input')
const $upload = $('#upload-logo')

function showError($target, message) {
    const $parent = $target.parent()
    $parent.addClass('has-error')
    if ($parent.parent().find('.col-sm-3').length === 0) {
        const $error = $(`
        <div class="col-sm-3">
            <p class="text-danger">${message}</p>
        </div>
        `)
        $parent.parent().append($error)
    }
}

function removeError($target) {
    const $parent = $target.parent()
    $parent.removeClass('has-error')

    const $errors = $parent.parent().find('.col-sm-3')
    if ($errors.length > 0) {
        $errors[0].remove()
    }
}

$upload.fileinput({
    showUpload: false,
    previewFileType: 'any',
})

$input.blur((e) => {
    const $this = $(e.target)
    const value = $this.val()
    if ($this.hasClass('required')) {
        $this.parent().toggleClass('has-error', value === '')
    }

    if (value !== '') {
        if ($this.is('#confirm')) {
            if (value !== $('#password').val()) {
                showError($this, '两次密码输入错误！请重新输入')
            } else {
                removeError($this)
            }
        } else if ($this.is('#email') || $this.is('#businessEmail')) {
            if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)) {
                showError($this, '输入的邮箱格式不正确！请重新输入')
            } else {
                removeError($this)
            }
        } else if ($this.is('#phone-number') || $this.is('#other-phone')) {
            if (value.length > 15 || /[^\d]/.test(value)) {
                showError($this, '手机号码的格式不正确！请重新输入')
            } else {
                removeError($this)
            }
        } else if ($this.is('#verification-code')) {
            const code = $('#verification-code').val().toUpperCase()
            sendValidateCode(code).then((data) => {
                console.log(data)
                if (data.response === 'error') {
                    showError($this, '输入的验证码错误！请重新输入')
                } else {
                    removeError($this)
                }
            }, (error) => {
                console.log(error)
                $('#error').html('与服务器连接出现问题！请稍后再试').show()
            })
        }
    }
})

// 验证表单
function validateForm() {
    $input.trigger('blur')
    const [data, formdata] = [{}, new FormData()]
    return new Promise((resolve, reject) => {
        const $errorInputs = $('form .has-error')
        if ($errorInputs.length > 0) reject($errorInputs[0])

        $('form').serializeArray().forEach((element) => {
            data[element.name] = element.value
        })
        formdata.append('userName', $('#username').val())
        formdata.append('formdata', $('#upload-logo')[0].files[0])

        resolve({ data, formdata })
    })
}

$('#submit').click(() => {
    validateForm().then(({ data, formdata }) => {
        console.log(data)
        const userName = data.userName
        const password = data.hashedPassword
        const code = data.verificationCode.toUpperCase()
        sendValidateCode(code).then(({ response }) => {
            if (response !== 'ok') throw new Error(`验证码输入错误！请重新输入(${code})`)
            return Promise.all([uploadLogo(formdata), signUp(data)])
        }).then(([upload, register]) => {
            if (!(upload.response === 'uploaded')) throw upload
            if (!(register.response === 'Sign Up Successfully')) throw register
            return login(userName, password)
        }).then(({ response }) => {
            if (response !== 'Authenticated') throw new Error('账号或密码错误！')
            alert('注册成功！')
            location.assign(`/${lang}/accounts`)
        })
            .catch((error) => {
                console.log('error')
                console.log(error)
                if (typeof error.message === 'string') {
                    alert(error.message)
                } else if (error.xhr.status === 503) {
                    alert('该用户已存在！请重新输入')
                    showError($('#username'), '该用户已存在！请重新输入')
                }
            })
    }, (errorDOM) => {
        console.log(errorDOM)
        errorDOM.focus()
    })

    return false
})
