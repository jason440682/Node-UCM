import { Router } from 'express'
import requests from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('get validate')
    requests.getVerificationCode().then((response) => {
        const cookies = response.header['set-cookie']
        req.session.name = cookies[1].split(';')[0]
        console.log(`JSESSIONID: ${req.session.name}`)
        res.send(response.body)
    })
})

router.post('/', (req, res) => {
    console.log('post validate')
    console.log(req.body)
    console.log(req.session.name)
    console.log('-------------------')
    requests.checkVerificationCode(req.body.code, req.session.name).then((response) => {
        res.send(response.text)
    }, (error) => {
        console.log('failed!')
        console.log(error)
        res.send('error')
    })
})

module.exports = router
