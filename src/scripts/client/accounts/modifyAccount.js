import { saveClientChange, deleteClient } from '../../plugins/api'
import { getCookie, ArchiveAccount } from '../../plugins/db'

const lang = /^\/(.*?)\//.exec(location.pathname)[1]
const userName = getCookie('userName')
const clientId = /modifyAccount\/(\d{1,})/.exec(location.pathname)[1]

const $ = window.jQuery
const $input = $('form :input')
const placeHolder = {
    '[name=firstName]': $('[name=firstName]').attr('placeholder'),
    '[name=lastName]': $('[name=lastName]').attr('placeholder'),
    '[name=businessName]': $('[name=businessName]').attr('placeholder'),
    '[name=billingAddressStreet]': $('[name=billingAddressStreet]').attr('placeholder'),
    '[name=billingAddressCity]': $('[name=billingAddressCity]').attr('placeholder'),
    '[name=billingAddressStateProvince]': $('[name=billingAddressStateProvince]').attr('placeholder'),
    '[name=billingAddressCountry]': $('[name=billingAddressCountry]').attr('placeholder'),
}

const disable = {
    business: { '[name=businessName]': 'Disabled' },
    personal: {
        '[name=firstName]': 'Disabled',
        '[name=lastName]': 'Disabled',
    },
}

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

// 验证表单
function validateForm() {
    $input.trigger('blur')
    const data = {}
    return new Promise((resolve, reject) => {
        const $errorInputs = $('form .has-error')
        const np = $('[name=notificationPreference]:checkbox')
        if ($errorInputs.length > 0) reject($errorInputs[0])

        $('form').serializeArray().forEach((element) => {
            data[element.name] = element.value
        }, this)

        if ($('#same').is(':checked')) {
            data.billingAddressStreet = data.mailingAddressStreet
            data.billingAddressCity = data.mailingAddressCity
            data.billingAddressStateProvince = data.mailingAddressStateProvince
            data.billingAddressCountry = data.mailingAddressCountry
            data.billingAddressZipCode = data.mailingAddressZipCode
        }

        let value = ''
        np.each((index, element) => {
            value += element.checked ? 1 : 0
        })

        data.customerAccountType = $('#account-type').attr('type')
        data.notificationPreference = value
        data.userName = userName
        data.mailingAddressRoomNumber = 'NA'

        // 填充被 Disabled 值为空的字段
        if (data.customerAccountType === '1') {
            data.businessName = ''
        } else {
            data.firstName = ''
            data.lastName = ''
        }

        resolve(data)
    })
}

// object 的键为 JQuery 的选择器，值为被 disabled 的元素的显示的值
function checkedEvent(disabled, required) {
    if (disabled) {
        Object.keys(disabled).forEach((selector) => {
            const [$selector, value] = [$(selector), disabled[selector]]
            $selector.attr('disabled', true)
            $selector.attr('placeholder', value)
            $selector.removeClass('required')
            $selector.parent().removeClass('has-error')
        })
    }

    if (required) {
        Object.keys(required).forEach((selector) => {
            const $selector = $(selector)
            $selector.removeAttr('disabled')
            $selector.attr('placeholder', placeHolder[selector])
            $selector.addClass('required')
        })
    }
}

$('[name=customerAccountType]').change((e) => {
    if (e.target.value === '1') {
        checkedEvent(disable.business, disable.personal)
    } else if (e.target.value === '2') {
        checkedEvent(disable.personal, disable.business)
    }
})

$('#same').change((e) => {
    const billing = {
        '[name=billingAddressStreet]': $('[name=mailingAddressStreet]').val(),
        '[name=billingAddressCity]': $('[name=mailingAddressCity]').val(),
        '[name=billingAddressStateProvince]': $('[name=mailingAddressStateProvince]').val(),
        '[name=billingAddressCountry]': $('[name=mailingAddressCountry]').val(),
        '[name=billingAddressZipCode]': $('[name=mailingAddressZipCode]').val(),
    }
    const [disabled, required] = e.target.checked ? [billing, null] : [null, billing]
    checkedEvent(disabled, required)
    $('[name=billingAddressCountry]').val($('[name=mailingAddressCountry]').val())
})

$input.blur((e) => {
    const $this = $(e.target)
    const value = $this.val()
    if ($this.hasClass('required')) $this.parent().toggleClass('has-error', value === '')

    if (value !== '') {
        if ($this.is('#email')) {
            if (!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(value)) {
                showError($this, '输入的邮箱格式不正确！请重新输入')
            } else {
                removeError($this)
            }
        } else if ($this.is('#mobile-num')) {
            if (value.length > 15 || /[^\d]/.test(value)) {
                showError($this, '手机号码的格式不正确！请重新输入')
            } else {
                removeError($this)
            }
        }
    }
})

$(document).ready(() => {
    const data = ArchiveAccount.get(clientId)
    if (data) {
        Object.keys(data).forEach((name) => {
            $(`[name=${name}`).val(data[name])
        })
    }
})

$('#save').click(() => {
    validateForm().then((data) => {
        data.customerId = clientId
        console.log(data)
        saveClientChange(data).then(({ response }) => {
            console.log(response)
            if (response === 'Modify client Successfully') {
                alert('修改成功！')
                ArchiveAccount.remove(clientId)
                location.assign(`/${lang}/accounts`)
            }
        }).catch((error) => {
            alert('出现错误！请查看 Console ！')
            console.log(error)
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

$('#delete').click(() => {
    if (confirm('真的要删除该用户吗？')) {
        deleteClient(userName, clientId).then(({ response }) => {
            console.log(response)
            if (response === 'delete client Successfully') {
                alert('删除成功！')
                location.assign(`/${lang}/accounts`)
            }
        }).catch((error) => {
            alert('出现错误！请查看 Console ！')
            console.log(error)
        })
    }

    return false
})
