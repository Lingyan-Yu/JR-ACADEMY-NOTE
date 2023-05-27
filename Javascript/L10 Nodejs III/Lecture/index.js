// Nodejs Original Method for web server

/*
const http = require('http')

const server = http.createServer()
const port = 8080

server.on('request', function(req, res) {
    console.log('get user succeeded')
    res.end('get user succeeded')
})


server.listen(port, function() {
    console.log('server is running on http://127.0.0.1:8080')
})
*/

// Nodejs Express Framework for web server or API server

// 1. import Express Framework
const express = require('express')

// 2. Create Web Server
const app = express()
const port = 8080
    // 2.1 Listen Get Request From Client Server
app.get('/user', function(req, res) { // request and url should match in Postman
    res.send({name: 'Chris', age: 20}) // .send closes the response
})

app.post('/user', function(req, res) {
    res.send('post request succeeded')
})

// req.query
app.get('/', function(req, res) {
    // req.query [object] <- /?key=value&key=value
    console.log(req.query)
    res.send(req.query)
})

// req.params
app.get('/users/:name/:room', function(req, res) { // :named route parameter should be predefined
    //res.params [object] <- /:named route parameter/:named route parameter
    console.log('name', req.params.name)
    console.log('room', req.params.room)
    res.send(req.params)
})

// 3. Run Web Server
app.listen(port, function() {
    console.log('server is running on http:localhost:8080')
})