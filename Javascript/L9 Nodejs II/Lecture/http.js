const http = require('http')
/*
// 1. create a web server
const server = http.createServer()
// 2. listen request from client
    // browser only gives get request, use postman for other requests
server.on('request', function(req, res) {
    console.log('someone is visiting')
    const url = req.url // url starts after port
    const method = req.method
    const str = 'hi, ' + url + 'and request method is ' + method
    console.log(str)
    res.setHeader('Content-Type', 'text/html;charset=utf-8') // address garbled text
    res.end(str) // return response to client
})
// 3. run server
server.listen(8080, function() {
    console.log('server is running on http://127.0.0.1:8080')
})
*/

// return different html according to req utl
const server = http.createServer()

server.on('request', function(req, res) {
    const url = req.url
    let content = '<h1>404 not found</h1>'
    if (url === '/' || url === '/home') {
        content = '<h1>welcome to home page</h1>'
    } else if (url === '/about') {
        content = '<h1>welcome to about page</h1>'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
})

server.listen(8080, function() {
    console.log('server is running on http://127.0.0.1:8080')
})

