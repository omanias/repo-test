/* const arreglo = [true, "Coder", 26, "House", false, 100]

arreglo[2] = 50

arreglo[6] = "Elemento agregado"
console.log(arreglo) */


//recorrido de los valores de un array

/* const numeros = [1, 2, 3, 4, 5]

for (let index = 0; index < 5; index++) {
    console.log(numeros[index])
} */


/* const arreglo = [true, "Coder", 26, "House", false, 100] */

//longitud del arreglo
// console.log(arreglo.length)

//Metodo para agregar elementos
//PUSH
/* arreglo.push("Elemento pusheado")

console.log(arreglo) */



/* carrito.push("Primer producto")
carrito.push("Segundo producto") */

/* const carrito = []

const miProducto = {
    marca: "A",
    precio: 1500
}

const otroProducto = {
    marca: "B",
    precio: 2000
}

carrito.push(miProducto)
carrito.push(otroProducto)
console.log(carrito) */


//UNSHIFT agregar elementos al comienzo del array

/* const arreglo = ["Primero", 2, false]

arreglo.unshift("otro elemento")
console.log(arreglo) */

//Eliminar el ultimo elemento de un arreglo
//POP
// const carrito = ["A", "B", "C"]
// carrito.pop()
//Elminar el primer elemento de un arreglo
//SHIFT
/* carrito.shift()

console.log(carrito) */

//SPLICE
// eliminar elementos de cualquier posicion
//indice - cant de ele a eliminar

// const nombres = ["Agustin", "Alex", "Damian", "Daniel", "Emiliano"]

// nombres.splice(1, 2)

//JOIN
// console.log(nombres.join("*"))


/* const categoriaA = ["A", "B", "C"]
const categoriaB = ["D", "E", "F"] */

//CONCAT
/* const miCatalogo = categoriaA.concat(categoriaB)

console.log(miCatalogo) */

//INDEXOF

// const nombres = ["Agustin", "Alex", "Damian", "Daniel", "Emiliano"]

// console.log(nombres.indexOf("Coder"))

//INCLUDES true || false
// console.log(nombres.includes("Coder"))

//Ejemplos para cargar datos y almacenarlos en un array

/* const listaNombres = []
let cantidad = 5

do {
    let entrada = prompt("Ingrese un nombre")
    listaNombres.push(entrada)
    console.log(listaNombres.length)
} while (listaNombres.length != cantidad); */

// const nuevaLista = listaNombres.concat(["Q", "W", "E"])

// console.log(listaNombres)
const nombre = "CoderHouse"
// FOR OF
const lista = [
    { id: 1, marca: "Producto A", precio: 1000 },
    { id: 2, marca: "Producto B", precio: 2000 },
    { id: 3, marca: "Producto C", precio: 3000 },
]

for (const producto of lista) {
    console.log(producto.precio)

}



