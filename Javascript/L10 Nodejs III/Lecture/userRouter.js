const express = require('express')
const userRouter = express.Router()

userRouter.post('/add', function(req, res) {
    const body = req.body
    console.log('body', body)
    res.send({
        status: 0,
        msg: 'add user succeeded',
        data: body
    })
})

module.exports = userRouter