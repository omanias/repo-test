/* function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function calcularOperacion(a, b, operacion) {
    return operacion(a, b)
}

const resultadoSuma = calcularOperacion(5, 3, sumar)
const resultadoResta = calcularOperacion(5, 3, restar)
const resultadoMultiplicar = calcularOperacion(5, 3, multiplicar)



console.log(resultadoMultiplicar) */

//CALLBACKS (funciones como parametros de otras funciones)

/* function saludar(nombre, callback) {
    console.log("Saludos " + nombre + "!")
    callback()
}

function despedir() {
    console.log("Hasta Luego")
}

saludar("Juan", despedir) */

/* function realizarOperacion(a, b, c) {
    const resultado = a + b
    c(resultado)
}

function mostrarResultado(res) {
    console.log("El resultado es: " + res)
}

realizarOperacion(5, 3, mostrarResultado) */

/* function validarSiEscorrecto(usuario) {
    if (usuario == true) {
        console.log("el usuario existe")
    }
}



function usuario(nombre) {
    if (usuario == true) {
        console.log("el usuario existe")
    }
}

const usuario = "Coder"

user(usuario, () => {
    console.log(`Bienvenido ${usuario}`)
})
usuario("House", validarSiEscorrecto) */

//FOR EACH
// const pendientes = ["DOM", "APIS", "JSON", "Librerias"]

/* pendientes.forEach((p, i) => {
    console.log(`${i}: ${p}`)
})
 */
/* const arrObj = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" }
]

arrObj.forEach((o, i) => {
    console.log(`${i}: ${o}`)
}) */

//MAP
/* pendientes.map((p) => {
    console.log(p)
}) */


//REDUCE

/* const carrito = [
    { nombre: "Monitor", precio: 1000 },
    { nombre: "Teclado", precio: 2000 },
    { nombre: "Mouse", precio: 3000 }
] */

/* let total = 0

carrito.forEach((p) => (total += p.precio))
console.log(total) */

/* let resultado = carrito.reduce((accum, p) => {
    return accum + p.precio
}, 0) */

// console.log(resultado)

/* const numeros = [1, 2, 3, 4, 5]

const suma = numeros.reduce((a, e) => {
    return a + e
}, 0)

console.log(suma) */


/* const carrito = [
    { nombre: "Monitor", precio: 1000 },
    { nombre: "Teclado", precio: 2000 },
    { nombre: "Teclado", precio: 3000 },
    { nombre: "Mouse", precio: 3000 }
]
 */
//FILTER

// let resultado = carrito.filter((p) => p.precio == 2000)

/* let resultado = carrito.filter((p) => p.nombre == "Teclado")

// FIND
let resultado2 = carrito.find((p) => p.nombre == "Teclado")

console.log(resultado)
console.log(resultado2) */


//MATH

/* console.log(Math.PI)
console.log(Math.max(52, 84, 1, 30, 20, 100))
console.log(Math.min(52, 84, 1, 30, 20, 100)) */
// console.log(Math.sqrt(9))
// console.log(Math.random())

/* const pi = Math.PI

const n = 3548.554
console.log(pi)
console.log(Math.ceil(pi))
console.log(Math.floor(pi))
console.log(Math.round(n)) */

//FECHAS

// console.log(new Date())

let ahora = new Date()
let anio = ahora.getMonth()

console.log(anio)














