/* 全局中间件 */
const express = require('express')
// Create Server
const app = express()

// Configure Middleware
    // Application-Level Middleware
    // e.g. obtain time
    const mw = function(req, res, next) {
        const time = Date.now()
        req.startTime = time
        next()
    }
    app.use(mw)

    // Router-Level Middleware
    app.get('/', function(req, res) {
        res.send('home page' + req.startTime)
    })

    app.get('/user', function(req, res) {
        res.send('user page' + req.startTime)
    })

// Run Server
const port = 8080
app.listen(port, function(req, res) {
    console.log('server is running on http://localhost:8080')
})