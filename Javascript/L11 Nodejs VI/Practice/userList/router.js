const express = require('express')

// Mock Data
let users = [
    {name: 'Ben', age: '20'},
    {name: 'John', age: '30'},
    {name: 'Chris', age: '40'},
    {name: 'Jane', age: '60'},
]

// Create Router
const router = express.Router()

// Configure API
// 1. Get user list -> /users/list
router.get('/users/list', function(req, res) {
    res.send({
        status: 0,
        msg: 'get user list succeeded',
        data: users,
    })
})

// 2. Post user -> /users/add
router.post('/users/add', function(req, res) {
    const newUser = req.body
    console.log('newUser', newUser)
    users.push(newUser)
    res.send({
        status: 0,
        msg: 'add user succeeded',
        data: users,
    })
})

// 3. Delete user list -> users/delete
router.delete('/users/delete', function(req, res) {
    users = []
    res.send({
        status: 0,
        msg: 'delete users succeeded',
    })
})

// Export Router
module.exports = router