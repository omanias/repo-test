// PUSH
/* let frutas = ["Manzanas", "Peras", "Uvas"]
frutas.push("Naranjas") */


/* let tareas = ["Desafio", "Entrega", "Practica"]


let nuevoElemento = "Nueva Tarea"
tareas.push(nuevoElemento)

console.log(tareas)

const producto = {
    marca: "Samsung",
    precio: 2000
}

const carrito =[] */


//POP (elimina el ultimo elemento del array)


/* let frutas = ["Manzanas", "Peras", "Uvas"]
frutas.pop()

console.log(frutas) */

/* let variable = 1
let var1 = "1"

console.log(typeof var1) */

/* let id = "1"
let id2 = 1 */

// === estrictamente igual
// == igual
// = asignacion

/* if (id === id2) {
    console.log("son iguales")
} else {
    console.log("No son iguales")
} */

//SHIFT (elimina el primer elemento de un arreglo)
// frutas.shift()

// console.log(frutas)

//UNSHIFT - Agrega elementos al principio del array

/* frutas.unshift("Naranjas")

console.log(frutas) */

/* let frutas = ["Manzanas", "Peras", "Uvas", "Melon", "Sandia"] */

//SLICE

/* let arreglo = frutas.slice(1, 4)

console.log(arreglo) */



//MAP crea un nuevo array aplicando una funcion a cada elemento

/* let frutas = ["Manzanas", "Peras", "Uvas", "Melon", "Sandia"]

let nuevo = frutas.map((f) => {
    console.log(f)
}) */

/* const productos = [
    { id: 1, nombre: "Producto A", precio: 1000, cat: "A" },
    { id: 2, nombre: "Producto B", precio: 1500, cat: "A" },
    { id: 3, nombre: "Producto C", precio: 2000, cat: "B" }
]

let resultado = productos.filter((p) => p.cat === "A")

console.log(resultado) */


// FILTER - FIND

// FILTER devuelve todos los elementos que coincidan con la busqueda

// FIND solo devuelve el primer elemento que encuentra


const carrito = [
    { nombre: "Empanadas", precio: 20 },
    { nombre: "Hambuguesas", precio: 50 },
    { nombre: "Pizzas", precio: 80 }
]


let totalPrecio = carrito.reduce((acumulador, p) => acumulador + p.precio, 0)

console.log(totalPrecio)


