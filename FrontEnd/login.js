const form = document.getElementById("loginform")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
form.addEventListener('submit', function(e){
    console.log(password.value)
    console.log(email.value)
    e.preventDefault()
})

