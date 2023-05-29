const express = require('express')
// Create Server
const app = express()

// Configure Middleware

// Built-In Middleware
app.use(express.static('public'))
    // Template Engine
    app.set('views', './views')
    app.set('view engine', 'ejs')
    app.get('', function(req, res) {
        res.render('index', {text: 'This is EJS'})
    })

// Error-Handling Middleware
app.use(express.json())

// Router-Level Middleware
const router = require('./router')
app.use(router)

// Run Server
const port = 8080
app.listen(port, function(req, res) {
    console.log('server is running on http://localhost:8080')
})