function clearList() {
    let list = document.getElementById('user_list')
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild)
    }
}

function getList() {
    console.log('call getList()')
    const url = 'http://localhost:8080/users/list'
    axios.get(url).then(function(res) {
        const userList = res.data.data
        console.log('userList', userList)
        clearList()
        userList.forEach(function (user) {
            const li = document.createElement('li')
            li.innerHTML = user.name + ' ' + user.age
            document.getElementById('user_list').appendChild(li)
        })
    })
}

function addUser() {
    console.log('call addUser')
    const url = 'http://localhost:8080/users/add'
    let nameInput = document.getElementById('name')
    let nameValue = nameInput.value
    let ageInput = document.getElementById('age')
    let ageValue = ageInput.value
    if (!nameValue || !ageValue) return // Edge Case 1: invalid value
    const body = {
        name: nameValue,
        age: ageValue,
    }
    axios.post(url, body).then(function(res) {
        const updatedUserList = res.data.data
        console.log('updatedUserList', updatedUserList)
        clearList()
        updatedUserList.forEach(function(user) {
            const li = document.createElement('li')
            li.innerHTML = user.name + ' ' + user.age
            document.getElementById('user_list').appendChild(li)    
        })
    })
    nameInput.value = '' // Edge Case 2: clear input value
    ageInput.value = '' // Edge Case 2: clear input value
}