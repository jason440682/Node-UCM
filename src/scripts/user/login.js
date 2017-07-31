import { getValidateCode, sendValidateCode, login } from '../plugins/api'

const $ = window.jQuery
const $input = $('form :input')

$input.blur((e) => {
    const $this = $(e.target)
    $this.parent().toggleClass('has-error', $this.val() === '')

    if ($this.is('#verification-code')) {
        const code = $('#verification-code').val()
        const d = { code }
        console.log(d)
        sendValidateCode(d).then((data) => {
            console.log(data)
            if (data.data === 'error') {
                $('#error').html('输入的验证码错误！请重新输入').show()
            } else {
                $('#error').hide()
            }
        }, (error) => {
            console.log('error')
            console.log(error)
            $('#error').html('与服务器连接出现问题！请稍后再试').show()
        })
    }
})

$('#verification-code-image').click(() => {
    console.log('get verification code')
    getValidateCode().then((data) => {
        console.log('resuly: ')
        console.log(data)
        console.log($('#verification-code-image')[0].src)

    }, (error) => {
        console.log('error')
        console.log(error)
    })
})

$('#submit').click(() => {
    const [username, password, code] = [$('#username').val(), $('#password').val(), $('#verification-code').val()]
    console.log(username, password)
    Promise.all([sendValidateCode(code), login(username, password)]).then((datas) => {
        const validateCorrect = datas[0] === 'ok'
        const logined = datas[1] === 'Authenticated'

        if (validateCorrect && logined) {
            location.assign('/accounts')
        } else if (!validateCorrect) {
            $('#error').html('输入的验证码错误！请重新输入').show()
        } else if (!logined) {
            $('#error').html('账号或密码输入错误！请重新输入').show()
        }
    }, (error) => {
        console.log('error')
        console.log(error)
        $('#error').html('与服务器连接出现问题！请稍后再试').show()
    })

    return false
})
