/* 局部中间件 */
const express = require('express')
// Create Server
const app = express()

// Configure Middleware
    // Partial-Level Middleware
    const mw1 = function(req, res, next) {
        console.log('hahaha')
        next()
    }

    const mw2 = function(req, res, next) {
        console.log('hehehe')
        next()
    }

    // Router-Level Middleware
    app.get('/home', mw1, mw2, function(req, res) { // use ,
        res.send('home page')
    })

    app.get('/about', [mw2, mw1], function(req, res) { // use [,]
        res.send('about page')
    })

// Run Server
const port = 8080
app.listen(port, function(req, res) {
    console.log('server is running on http://localhost:8080')
})