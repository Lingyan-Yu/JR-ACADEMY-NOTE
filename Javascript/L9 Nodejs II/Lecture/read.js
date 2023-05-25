const fs = require('fs')

// successful read -> err == null == 0
fs.readFile('./files/forRead.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log('err', err)
  } else {
    console.log('data', data)
  }
})

// failed read -> data == undefined, err == object
fs.readFile('./files/0.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log('err', err)
  } else {
    console.log('data', data)
  }
})

// common format
fs.readFile('./files/forRead.txt', 'utf-8', function(err, data) {
  if (err) {
    return console.log('err', err) // code after not execute if return
  }
  console.log('data', data)
})
