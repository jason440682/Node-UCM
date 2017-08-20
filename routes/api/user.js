import { Router } from 'express'
import { checkUser } from '../plugins/requests'

const router = Router()

router.post('/login', (req, res) => {
    console.log('Post Login API')
    console.log(req.body)
    console.log(req.session.name)
    const [userName, password] = [req.body.userName, req.body.hashedPassword]
    checkUser(userName, password).then((response) => {
        req.session.userName = userName
        req.session.password = password
        return response.text
    }, error => error)
        .then(data => res.send(data))
})

router.get('/logout', (req, res) => {
    console.log('Get Log out!')
    delete req.session.userName
    delete req.session.password
    delete req.session.validation
    console.log(req.session)
    res.redirect('/login')
})

module.exports = router
