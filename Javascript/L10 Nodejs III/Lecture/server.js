const express = require('express')

// Create Web Server
const app = express()

// Set Up Middleware
    // 1. Built-In Middleware - Content Parser
    app.use(express.urlencoded({extended: false}))

    // 2. Router-Level Middleware
    // Import Router
    const profileRouter = require('./profileRouter')
    const userRouter = require('./userRouter')
    const journalRouter = require('./journalRouter')

    // Configure Router
    app.use('/profiles', profileRouter)
    app.use('/users', userRouter)
    app.use('/journals', journalRouter)

// Run Server
const port = 8080
app.listen(port, function() {
    console.log('server is running on http://localhost:8080')
})