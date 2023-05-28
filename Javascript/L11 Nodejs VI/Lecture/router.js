const express = require('express')

const router = express.Router()

router.get('/users', function(req, res) {
    res.send({
        status: 0,
        msg: 'get users succeeded'
    })
})

module.exports = router