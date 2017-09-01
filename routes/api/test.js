import { Router } from 'express'

const router = Router()

function sendRequest(req, res, msg) {
    return res.send({
        msg,
        data: {
            query: req.query,
            params: req.params,
            body: req.body,
        },
        request: {
            url: req.url,
            method: req.method,
            statusCode: req.statusCode,
            headers: req.headers,
            domain: req.domain,
            cookies: req.cookies,
        },
    })
}

router.get('/', (req, res) => {
    console.log('Get Test /')
    sendRequest(req, res, 'Get Test /')
})

router.get('/:id', (req, res) => {
    console.log('Test: ')
    sendRequest(req, res, 'Get Test /:id ')
})

router.post('/', (req, res) => {
    console.log('Post Test: ')
    sendRequest(req, res, 'Post Test / ')
})

router.post('/:id', (req, res) => {
    console.log('Post Test /:id ')
    sendRequest(req, res, 'Post Test /:id')
})

module.exports = router
