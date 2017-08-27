import { Router } from 'express'
import { getLogo } from '../plugins/requests'

const router = Router()

router.get('/:userName', (req, res) => {
    console.log('Get Logo')
    console.log(req.params)
    getLogo(req.params.userName).then(response => res.send(response.body))
})

module.exports = router
