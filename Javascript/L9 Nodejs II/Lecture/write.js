const fs = require('fs')

fs.writeFile('./files/forWrite.txt', 'Happy Node', function(err, data) {
  // successful write, err == null
  // failed write, err == subject
  if (err) {
    return console.log('err', err.message)
  }
  console.log('Write File Succeeded')
})