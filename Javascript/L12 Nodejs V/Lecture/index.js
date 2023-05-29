const express = require('express')

// Create Server
const app = express()

// Define Middleware
const mw = function(req, res, next) {
    console.log('hello world')
    next()
}

// Register Defined Middleware
app.use(mw) // claim middleware before and call by app.use
app.use(function(req, res, next) { // directly call middleware by app.use
    console.log('hi world')
    next()
})

// Create API
app.get('/', function(req, res) {
    res.send('home page')
})

// Run Server
const port = 8080
app.listen(8080, function(req, res) {
    console.log('server is running on http://localhost:8080')
})

/*
if port is occupied
1. lsof -i tcp:(port)
2. kill -9 (code)
*/