/* let documento;
documento = document.scripts

console.log(documento) */

//METODOS TRADICIONAL

/* const navbar = document.getElementsByClassName("form-label")
const span = document.getElementsByTagName("span")
const email = document.getElementById("name")

console.log(email) */

//METODOS MODERNOS

//Solo trae un solo elemento
// const navbar = document.querySelector(".form-label")
//Trae todos los elementos con la misma clase
// const navbar = document.querySelectorAll(".form-label")
// const span = document.querySelector("span")
/* const email = document.querySelector("#boton")

console.log(email) */

//Modificar el contenido
/* const titulo = document.querySelector("h1").textContent = "Nuevo encabezado" */
//Eliminar contenido
/* const subtitle = document.querySelector("h3")
subtitle.remove() */

//AGREGAR CONTENIDO AL HTML

// let vacio = document.querySelector(".vacio")

//crear el elemento
// let agregado = document.createElement("p")

// inyectar el elemento
// agregado.innerHTML = "Parrafo de demostración"

//Agregar el elemento al HTML
/* document.vacio.appendChild(agregado) */
/* vacio.insertBefore(agregado, vacio.children[1])


    `
<p>Contenido</p>
`
*/

//Agregar elementos desde un array


const catalogo = document.querySelector(".catalogo")
// console.log(catalogo)

/* let otrosCursos = ["Diseño UX/UI", "React", "Backend", "SQL", "Amazon"]

for (let c of otrosCursos) {
    let listado = document.createElement("li")
    listado.innerHTML = c
    catalogo.appendChild(listado)
} */

let cursos = [
    { id: 1, titulo: "Js", precio: 1000, imagen: "" },
    { id: 2, titulo: "React", precio: 1500, imagen: "" },
    { id: 3, titulo: "Backend", precio: 2000, imagen: "" }
]
console.log(cursos)


for (let c of cursos) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `

    <h3>Curso: ${c.titulo}</h3>
    <p>Precio: ${c.precio}</p>

    <button class="btn btn-warning">Agregar al carrito</button>
    `
    document.body.appendChild(contenedor)
}