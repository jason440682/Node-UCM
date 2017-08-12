import { Router } from 'express'
import { getVerificationCode, checkVerificationCode } from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Get Validate')
    getVerificationCode().then((response) => {
        const cookies = response.header['set-cookie']
        req.session.name = cookies[1].split(';')[0]
        console.log(`JSESSIONID: ${req.session.name}`)
        res.send(response.body)
    })
})

router.post('/', (req, res) => {
    console.log('Post Validate')
    console.log(req.body)
    console.log(req.session.name)
    checkVerificationCode(req.body.code, req.session.name).then((response) => {
        req.session.validation = true
        return response.text
    }, error => error)
        .then(data => res.send(data))
})

module.exports = router
