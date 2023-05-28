const express = require('express')

// Create Server
const app = express()


// Configure Middleware

    // Error-Handling Middleware
    const parser = require('body-parser')
    app.use(parser.json())

    // Third-Party Middleware
    const cors = require('cors')
    app.use(cors())

    // Router-Level Middleware
    const router = require('./router')
    app.use(router)

// Run Server
const port = 8080
app.listen(port, function() {
    console.log('server is running on http://localhost:8080')
})