const express = require('express')

// Create Server
const app = express()

// Configure Middleware
    // Built-In Middleware - Static Assets
    // 1. Set Folder as Static Assets
    app.use(express.static('./public')) 
    app.use('/users', express.static('./files')) // * prefix path ('/user' is added)

    // 2. Access Static Resource Using URL
        // http://localhost:8080/1.html
        // http://localhost:8080/users/1.html
        // resource folder doesn't need to be shown in url
        // if file name is duplicated, the first file is fetched
        // change file name or add prefix path -> *

    // Third-Party Middleware - CORS
    // 1. Import CORS
    const cors = require('cors')
    // 2. Configure CORS
    app.use(cors())

    // Router-Level Middleware
    // 1. Import Router
    const router = require('./router')
    // 2. Configure Router
    app.use(router)

// Run Server
const port = 8080
app.listen(port, function() {
    console.log('server is running on http://localhost:8080')
})