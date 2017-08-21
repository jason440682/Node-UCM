import { createClientAccounts } from '../../plugins/api'
import { User } from '../../plugins/db'

const $ = window.jQuery
const $input = $('form :input')
const placeHolder = {
    '[name=firstName]': $('[name=firstName]').attr('placeholder'),
    '[name=lastName]': $('[name=lastName]').attr('placeholder'),
    '[name=businessName]': $('[name=businessName]').attr('placeholder'),
    '[name=billingAddressStreet': $('[name=billingAddressStreet]').attr('placeholder'),
    '[name=billingAddressCity]': $('[name=billingAddressCity]').attr('placeholder'),
    '[name=billingAddressStateProvince]': $('[name=billingAddressStateProvince]').attr('placeholder'),
    '[name=billing-zip-code]': $('[name=billing-zip-code]').attr('placeholder'),
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
            data['billing-zip-code'] = data['mailing-zip-code']
            data.billingAddressCountry = data.mailingAddressCountry
        }

        let value = ''
        np.each((index, element) => {
            value += element.checked ? 1 : 0
        })

        data.notificationPreference = value
        data.userName = User.get('userName')
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
        '[name=billingAddressStreet': $('[name=mailingAddressStreet]').val(),
        '[name=billingAddressCity]': $('[name=mailingAddressCity]').val(),
        '[name=billingAddressStateProvince]': $('[name=mailingAddressStateProvince]').val(),
        '[name=billing-zip-code]': $('[name=mailing-zip-code]').val(),
        '[name=billingAddressCountry]': $('[name=mailingAddressCountry]').val(),
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

$('#submit').click(() => {
    validateForm().then((data) => {
        console.log(data)
        createClientAccounts(data).then(({ response }) => {
            if (response === 'Create staff user Successfully') {
                alert('添加成功！')
                location.assign('/accounts')
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
