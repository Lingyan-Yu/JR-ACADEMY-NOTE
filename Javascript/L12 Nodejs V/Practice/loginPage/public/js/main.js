function login() {
    const nameInput = document.getElementById('name')
    const nameValue = nameInput.value
    const psInput = document.getElementById('password')
    const psValue = psInput.value
    console.log('nameValue', nameValue)
    console.log('psValue', psValue)
    if (!nameValue || ! psValue) {
        document.getElementById('message').innerHTML = 'Username or password is void!'
        setTimeout(function() {
            document.getElementById('message').innerHTML = ''
        }, 3000)
        return
    }
    const body = {
        name:nameValue,
        ps:psValue
    }
    const url = 'http://localhost:8080/login'
    axios.post(url, body)
    .then(function(res) {
        console.log(res.data.msg)
        document.getElementById('message').innerHTML = res.data.msg
        nameInput.value = ''
        psInput.value = ''
    })
    .catch(function(err) {
        console.log(err)
        document.getElementById('message').innerHTML = err.response.data.msg
        nameInput.value = ''
        psInput.value = ''
    })
    setTimeout(function() {
        document.getElementById('message').innerHTML = ''
    }, 3000)
}