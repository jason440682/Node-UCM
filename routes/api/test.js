import { Router } from 'express'
import { checkUser } from '../plugins/requests'

const router = Router()

router.get('/', (req, res) => {
    console.log('Test: ')
    console.log(req.headers)
    console.log(req.body)
    res.send({
        code: 200,
        msg: 'test success!',
    })
})

router.post('/', (req, res) => {
    console.log('Test: ')
    console.log(req.headers)
    console.log(req.body)
    checkUser(req.body.userName, req.body.password).then((data) => {
        res.send({
            code: 200,
            msg: 'success!',
            data,
        })
    }, (error) => {
        res.send({
            code: 500,
            msg: error,
            data: null,
        })
    })
})

module.exports = router
