import { productos } from "../db/productos.js"
import { comprarProducto } from "./carrito.js"


const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productos")
const filterInput = document.getElementById("filter_input")
const filterLista = document.getElementById("filter_lista")
const filterNombre = document.getElementById("filter_nombre")
const filterPrecio = document.getElementById("filter_precio")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

let usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"))

document.addEventListener("DOMContentLoaded", () => {

    if(usuarioLogueado === null){
        const a = document.createElement("a")
        a.href = "./html/usuarios.html"
        a.innerHTML = "Login"
        userLogin.appendChild(a)
    }else{
        const p = document.createElement("p")
        const close = document.createElement("button")

        p.innerHTML = `Bienvenido ${usuarioLogueado.user}`
        close.id = "cerrar_sesion"
        close.innerHTML = "cerrar sesion"
        close.addEventListener("click", () => {
            alert(`Gracias por comprar en nuestra tienda ${usuarioLogueado.user}. Usuario deslogueado`)
            sessionStorage.removeItem("usuario")
            location.reload()
        })
        userLogin.appendChild(p)
        userLogin.appendChild(close)
    }
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productos) => {

    divProductos.innerHTML = "";

    productos.forEach(producto => {

        const { imagen, nombre, categoria, precio, id } = producto

        let card = document.createElement("div")

        card.className = "producto"
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="imagen 1">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.categoria}</p>
                <p class="card-text">$${producto.precio}</p>
                <button id = comprar${producto.id} class="btn btn-primary">Comprar</button>

                    ${
                        usuarioLogueado?.admin === true? `<button id="eliminar${id}" class="btn btn-danger">Eliminar</button>` : ""
                    }

            </div>
        </div>
        `
        divProductos.appendChild(card)

        const btnComprar = document.getElementById(`comprar${producto.id}`)
        btnComprar.addEventListener("click", () => comprarProducto(producto.id))

        if(usuarioLogueado?.admin === true){
            const btnEliminar = document.getElementById(`eliminar${id}`)
            btnEliminar.addEventListener("Click", () => eliminarProducto(id))
        }

        

    });

};

//FILTRAR POR INPUT

filterInput.addEventListener("keyup", (e) => {
    const productosFilter = productosDisponibles.filter((producto) => producto.nombre.toLowerCase().includes(e.target.value))
    productosDisponibles = productosFilter

    if(e.target.value !== ""){
        generarCardsProductos(productosFilter)
    }else{
        productosDisponibles = JSON.parse(localStorage.getItem("productos"))
        generarCardsProductos(productosDisponibles)
    }
})

//FILTRAR POR Categoria segun Pick EN LISTA

filterLista.addEventListener("click", (e) => {
    
    const productosFilter = productosDisponibles.filter((producto) => producto.categoria.toLowerCase().includes(e.target.innerHTML.toLowerCase()))

    if(e.target.innerHTML !== "Todos"){
        generarCardsProductos(productosFilter)
    }else{
        productosDisponibles = JSON.parse(localStorage.getItem("productos"))
        generarCardsProductos(productosDisponibles)
    }
})

//filtro selector por nombre

filterNombre.addEventListener("click", (e) => {
    filtrarPorNombre(e.target.innerHTML)

})

const filtrarPorNombre = (orden) => {
    let productos 

    if(orden === "Ascendente"){
        productos = productosDisponibles.sort((a, b) => {
            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                return 1
            }else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return -1
            }else{
                return 0
            }
        })
    }else if(orden === "Descendente"){
        productos = productosDisponibles.sort((a, b) => {
            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return 1
            }else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                return -1
            }else{
                return 0
            }
        })
    }
    generarCardsProductos(productos)
}

// filtro por precio

filterPrecio.addEventListener("click", (e) => {
    const orden = e.target.innerHTML
    let productos
    if(orden === "Ascendente"){
        productos = productosDisponibles.sort((a, b) => a.precio - b.precio)
    }else if(orden === "Descendente"){
        productos = productosDisponibles.sort((a, b) => b.precio - a.precio)
    }
    generarCardsProductos(productos)
})


