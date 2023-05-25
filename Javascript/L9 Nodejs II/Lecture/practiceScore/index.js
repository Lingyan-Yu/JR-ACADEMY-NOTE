// get scores from score.txt,
// convert format
  //Ben:99
  //Jane:100
  //John:80
  //Chris:66
  //Andrew:88
// write into updatedScore.txt

const fs = require('fs')

fs.readFile('score.txt', 'utf-8', function(err, data) { // without 'utf-8' == <Buffer ..> object
  if (err) {
    return console.log('read file failed', err.message)
  }
  console.log('read file succeeded', data, typeof data)
  // read file succeeded Ben=99 Jane=100 John=80 Chris=66 Andrew=88 string

  // 1. string to array
  let arr = data.split(' ')
  console.log('arr', arr)
  // 2. replace = with :
  const newArr = []
  arr.forEach(function(item) {
    newArr.push(item.replace('=', ':'))
  })
  console.log('newArr', newArr)
  // 3. array to string
  let newData = newArr.join('\r\n')
  console.log('newData', newData)
  fs.writeFile('newScore', newData, function(err) {
    if (err) {
      return console.log('write file failed', err.message)
    }
    console.log('write file succeeded')
  })
})


