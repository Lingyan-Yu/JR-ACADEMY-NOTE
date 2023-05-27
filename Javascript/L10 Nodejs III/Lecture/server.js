const express = require('express')

// Create Web Server
const app = express()

// 配置解析body数据的中间件
app.use(express.urlencoded({extended: false}))

// Import Router
const profileRouter = require('./profileRouter')
const userRouter = require('./userRouter')
const journalRouter = require('./journalRouter')

// Run Router
app.use('/profiles', profileRouter)
app.use('/users', userRouter)
app.use('/journals', journalRouter)

// Run Server
const port = 8080
app.listen(port, function() {
    console.log('server is running on http://localhost:8080')
})