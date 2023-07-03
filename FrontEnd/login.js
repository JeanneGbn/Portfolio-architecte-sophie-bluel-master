// Connection API

function connection() {
    return fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": stockEmail,
            "password": stockPassword,
        })
    })
}


// Récupérer email & MDP 

const form = document.getElementById("loginform")
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const login = document.querySelector('input[type="submit"]')
let stockEmail = email.value
let stockPassword = password.value


// Event connection 

const errorConnection = document.querySelector(".error_connection")
errorConnection.innerHTML =
`Email ou Mot De Passe incorrect`

login.addEventListener('click', (e) => {
    e.preventDefault()
    stockEmail = email.value
    stockPassword = password.value

    connection()
        .then((response) => response.json())
        .then(login => {
            if (login.token) {
                localStorage.setItem('token', login.token)
                isUserLogged = true
                window.location.href = "./index.html"
                console.log("connect")
            } else {
                console.error("Erreur dans l’identifiant ou le mot de passe")
                errorConnection.classList.remove("hidden")
                
            }
        })
        
})


// Récupérer données 

email.addEventListener('input', (e) => {
    console.log(e.target.value)

})
password.addEventListener('input', (e) => {
    console.log(e.target.value)
})



