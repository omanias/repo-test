/* prompt("")
alert()

const nombre = "coderhouse"
console.log(nombre) */
//funcion
//parametros


//VENTAJAS
/*
evitan instrucciones repetidas
resuleven tareas sencillas
aportan cierto orden al codigo y proyecto
*/

//SINTAXIS
/* function mostrarMensaje() {
    //cuerpo de la funcion
    alert("Funciones en Js")
} */

// mostrarMensaje()


/* function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre")
    console.log(`Bienvenido ${nombre}`)
}

solicitarNombre() */

//PARAMETROS == MATERIA PRIMA

/* function sumar(a, b) {
    let resultado = a + b
    return resultado
} */

// console.log(sumar(5, 6))

// console.log(resultado)

/* function saludar(nombre, apellido) {
    console.log(`Bienvenido ${nombre} ${apellido}`)
}

saludar("coder", "house") */

/* function multiplicar(a, b) {
    let resultado = a * b
    console.log(resultado)
}

multiplicar(5, 3) */

/* function calculadora(a, b, operacion) {
    switch (operacion) {
        case "+":
            return a + b
            break
        case "-":
            return a - b
            break
        case "*":
            return a * b
            break
        case "/":
            return a / b
            break
        default:
            return 0
            break
    }
}
console.log(calculadora(10, 2, "h")) */


//SCOPE DE VARIABLES

//ambitos => local - global
//Global
/* 
function crearMensaje() {
    let mensaje = "mensaje A"
}
console.log(mensaje)

crearMensaje() */

/* 
Desde dentro de una funcion puedo acceder a variables globales
Pero a nivel global en la aplicacion no puedo acceder directamente a variables locales (dentro de una funcion o condicional)
*/


function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1 + " Es mayor a " + num2
    } else if (num1 < num2) {
        return num2 + " Es mayor a " + num1
    } else {
        return num1 + " y " + num2 + " son iguales"
    }
}

console.log(numeroMayor(20, 20))

