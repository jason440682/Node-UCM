import { uploadLogo, signUp } from '../plugins/api'

const $ = window.jQuery
const $input = $('form :input.required')
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
    upload: false,
    previewFileType: 'any',
})

$upload.on('change', () => {
    const $fileInput = $('.file-caption-name')
    if ($fileInput.text() === '') {
        showError($fileInput.parent().parent().parent(), '请上传公司 Logo！')
    } else {
        removeError($fileInput.parent().parent().parent())
    }
})

$input.blur((e) => {
    const $this = $(e.target)
    $this.parent().toggleClass('has-error', $this.val() === '')

    if ($this.is('#confirm')) {
        if ($this.val() !== $('#password').val()) {
            showError($this, '两次密码输入错误！请重新输入')
        } else if ($this.val() !== '') {
            // 重新填写 Confirm Password 的逻辑
            removeError($this)
        }
    }

    if ($this.is('#email') || $this.is('#businessEmail')) {
        if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($this.val())) {
            showError($this, '输入的邮箱格式不正确！请重新输入')
        } else {
            removeError($this)
        }
    }

    if ($this.is('#phone-number') || $this.is('#other-phone')) {
        if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test($this.val())) {
            showError($this, '手机号码的格式不正确！请重新输入')
        } else {
            removeError($this)
        }
    }
})


// 验证表单
function validateForm() {
    $input.trigger('blur')
    const $logo = $('#upload-logo')
    const data = {}
    const formdata = new FormData()
    return new Promise((resolve, reject) => {
        const $requiredInputs = $('form .has-error')
        if ($requiredInputs.length > 0) reject($requiredInputs[0])
        if ($logo[0].files.length === 0) {
            showError($logo.parent().parent().parent().parent(), '请上传公司 Logo！')
            reject($logo[0])
        } else {
            removeError($logo.parent().parent().parent().parent())
        }

        $('form').serializeArray().forEach((element) => {
            data[element.name] = element.value
        }, this)
        formdata.append('userName', $('#username').val())
        formdata.append('formdata', $('#upload-logo')[0].files[0])

        resolve({ data, formdata })
    })
}

$('#submit').click(() => {
    validateForm().then((data) => {
        console.log(data)
        Promise.all([uploadLogo(data.formdata), signUp(data.data)]).then((datas) => {
            console.log('datas')
            console.log(datas)
            const uploaded = datas[0].response === 'uploaded'
            const registered = datas[1].response === 'Sign Up Successfully'
            if (uploaded && registered) {
                alert('注册成功！')
                location.assign('/accounts')
            }
        }, (error) => {
            console.log(error)
            if (error.xhr.status === 503) {
                alert('该用户已存在！请重新输入')
                showError($('#username'), '该用户已存在！请重新输入')
            }
        })
    }, (errorDOM) => {
        console.log('error dom!')
        errorDOM.focus()
    })

    return false
})
