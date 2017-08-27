import { uploadLogo, saveMasterChange } from '../../plugins/api'
import { ArchiveAccount, getCookie } from '../../plugins/db'

const lang = /^\/(.*?)\//.exec(location.pathname)[1]
const userName = getCookie('userName')

const $ = window.jQuery
const $input = $('form :input')
const $upload = $('#upload-logo')
const clientId = $('#master-id').html()

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

        data.userName = userName
        data.masterUserBusinessId = $('#business-id').html()
        data.businessRoomNumber = 'NA'
        data.businessFaxNumber = 'NA'

        resolve({ data, formdata })
    })
}

$(document).ready(() => {
    const data = ArchiveAccount.get(clientId)
    if (data) {
        Object.keys(data).forEach((name) => {
            $(`[name=${name}`).val(data[name])
        })
    }
})

$('#save').click(() => {
    validateForm().then(({ data, formdata }) => {
        console.log(data)
        Promise.all([uploadLogo(formdata), saveMasterChange(data)])
            .then(([upload, modifyMaster]) => {
                if (!(upload.response === 'uploaded')) throw upload
                if (!(modifyMaster.response === 'Modify master user Successfully')) throw modifyMaster
                alert('修改成功！')
                ArchiveAccount.remove(clientId)
                location.assign(`/${lang}/accounts`)
            }).catch((error) => {
                console.log(error)
                alert('出现错误！请查看 Console ！')
                if (typeof error.message === 'string') {
                    alert(error.message)
                } else if (error.xhr.status === 503) {
                    alert('该用户已存在！请重新输入')
                    showError($('#username'), '该用户已存在！请重新输入')
                } else if (error.status === 500) {
                    alert('数据传送时出现问题！请检查格式！')
                }
            })
    }, (errorDOM) => {
        console.log(errorDOM)
        errorDOM.focus()
    })

    return false
})

$('#archive').click(() => {
    const data = {}
    $('form').serializeArray().forEach((element) => {
        data[element.name] = element.value
    }, this)

    ArchiveAccount.set(clientId, data)
    alert('保存成功！数据会暂时保存在本地浏览器！')
    location.assign(`/${lang}/accounts`)
    return false
})
