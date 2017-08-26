import { uploadLogo, createStaffUser } from '../../plugins/api'
import { getCookie } from '../../plugins/db'

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
            }
        } else if ($this.is('#email') || $this.is('#work-email')) {
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
        }, this)
        formdata.append('userName', $('#username').val())
        formdata.append('formdata', $('#upload-logo')[0].files[0])

        resolve({ data, formdata })
    })
}

$('#submit').click(() => {
    validateForm().then(({ data, formdata }) => {
        data.userName = getCookie('userName')
        console.log(data)
        Promise.all([uploadLogo(formdata), createStaffUser(data)])
            .then(([upload, register]) => {
                console.log('datas')
                console.log(upload)
                console.log(register)
                if (upload.response === 'uploaded' && register.response === 'Create staff user Successfully') {
                    alert('添加成功！')
                    location.assign(`/${lang}/accounts`)
                }
            }, (error) => {
                console.log(error)
            })
    }, (errorDOM) => {
        console.log(errorDOM)
        errorDOM.focus()
    })

    return false
})
