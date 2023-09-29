//un objeto es un tipo de dato.
// strings, numbers, booleanos, objetos

/* const nombre = "Monitor de 24 pulgadas"
const precio = 2000
const disponible = true */

//objetos = producto
//OBJECT LITERAL
const producto = {
    //propiedades
    //clave:valor // key:value
    nombre: "Monitor de 24 pulgadas",
    precio: 2000,
    disponible: true
}


//Sintaxis de punto
// console.log(producto.nombre)

const nombreProducto = producto.nombre

// console.log(nombreProducto)

//CRUD (create,read,update,delete)

// Create
producto.imagen = "image.jpg"
// Update
producto.disponible = false
//Delete
delete producto.precio

//cambios para github

producto.origen = "China"
// console.log(producto)

//DESESTRUCTURACION

//sacar y guardar como una variable, una propiedad de un objeto

const { nombre, imagen, origen, precio } = producto
/* console.log(nombre)
console.log(imagen)
console.log(origen)
console.log(precio) */

const usuario = {
    nombre: "Coder",
    apellido: "House",
    edad: 25,
    email: "coder@house.com"
}

const comision = {}

// console.log(comision)

//OBJECT CONSTRUCTOR
/* class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        this.disponible = true
    }
}

//Instancias
const producto2 = new Producto("Teclado", 1000)
const producto3 = new Producto("Mouse", 500)

console.log(producto3) */

class Cliente {
    constructor(nombre, acceso) {
        this.nombre = nombre
        this.acceso = acceso
        //método -> acciones del objeto
        this.saludar = function () {
            console.log("Saludos, soy " + this.nombre)
        }
    }
}
//Instanciar
const coderhouse = new Cliente("Coder", "Aceptado")
console.log(coderhouse)

coderhouse.saludar()