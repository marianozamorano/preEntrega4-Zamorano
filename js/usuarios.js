const btnRegister = document.getElementById("btn_register")
const formRegister = document.getElementById("user_register")
const formLogin = document.getElementById("user_login")
const btnLogin = document.getElementById("btn_loguearse")

let usuarios = JSON.parse(localStorage.getItem("usuarios"))

class newUser{
    constructor(user, pass){
        this.id = usuarios.length + 1
        this.user = user
        this.pass = pass
        this.admin = false
    }
}

btnLogin.addEventListener("click", (e) => {
    e.preventDefault()

    const user = formLogin.children[0].children[1].value
    const pass = formLogin.children[1].children[1].value

    validarYLoguear(user, pass)

})

const validarYLoguear = (user, pass) => {
    const userExiste = usuarios.find((usuario) => usuario?.user === user)

    if(userExiste === undefined || userExiste.pass !== pass){
        alert("Error en usuario o contraseña")
    }else{
        alert(`Bienvenido ${user}`)
        let usuario = {
            user: userExiste.user,
            pass: userExiste.pass,
            admin: userExiste.admin
        }

        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../index.html"
        // console.log(usuario);
    }
}

btnRegister.addEventListener("click", (e) => {
    e.preventDefault()

    const user = formRegister.children[0].children[1].value
    const pass = formRegister.children[1].children[1].value

    const nuevoUsuario = new newUser(user, pass)

    validarYRegistrar(nuevoUsuario)
})

const validarYRegistrar = (nuevoUsuario) => {
    const userNuevo = usuarios.find((usuario) => usuario?.user === nuevoUsuario.user)

    if(userNuevo === undefined){
        usuarios.push(nuevoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))
        alert(`Gracias ${nuevoUsuario.user} por registrarte, usted será redirigido a la página principal`)
        // console.log(usuarios);
        location.href = "../index.html"
    }else{
        alert(`El usuario ya existe`)

        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../index.html"
        
    }
}