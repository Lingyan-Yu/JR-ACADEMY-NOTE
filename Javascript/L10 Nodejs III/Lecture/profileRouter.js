const express = require('express')
const profileRouter = express.Router()


profileRouter.get('/list', function(req, res) { // common route can be omitted and added in app.use
    res.send('get profile list succeeded')
})

profileRouter.post('/add', function(req, res) { // common route can be omitted and added in app.use
    res.send('add profile succeeded')
})

module.exports = profileRouter