const user = {
    name: 'Ben',
    ps: '123456'
}

const express = require('express')

const router = express.Router()

router.post('/login', function(req, res) {
    const body = req.body
    console.log('body', body)
    if (body && body.name === user.name && body.ps === user.ps) {
        res.status(200).json({
            msg: body.name + ' ' + 'login succeeded!'
        })
    } else {
        res.status(400).json({
            msg: 'username or password is not correct!'
        })
    }
})

module.exports = router