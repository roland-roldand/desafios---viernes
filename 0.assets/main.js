alert("Hola desde main.js")
alert("PROFE, EL TRABAJO ANTERIOR ESTABA MAL PORQUE NO ERA EL QUE TENIA QUE CORREGIR")
console.log("hola desde main.js")

// variables let -- se pueden modificar. const, no. 

let x = 10
const y = 5
console.log(x + y)

// let nombre = "erica"
// let apellido = "roldán"
// console.log(nombre, apellido)
// console.log(`tu nombre completo es ${nombre} ${apellido}`)
// forma de concatenar = console.log("tu nombre completo es: " + nombre, apellido)

// ---------------------------

// el usuario pone su nombre y lo guardas en nombreUsuario
// todo lo que escriba se almacena en la nueva variable

const nombreUsuario = prompt("Ingrese su nombre y apellido")
console.log("el nombre de usuario es: " + nombreUsuario)

// --------------------------

// para el nombre del producto (nombreProducto)
// para la cantidad deseada (cantidadDeseada)
// precio por unidad (precioUnitario)

const nombreProducto = prompt("Ingrese el nombre del producto que desea")
console.log("ha seleccionado: " + nombreProducto)

const cantidadDeseada = prompt("¿Cuanto desea adquirir? (especifique número)")
console.log(`desea ${cantidadDeseada} unidades`)

const precioUnitario = 200
alert("El precio por unidad es: $" + precioUnitario)

console.log(cantidadDeseada * precioUnitario)

console.log("el costo total es: $" + cantidadDeseada * precioUnitario)
alert("El costo total de su compra es: $" + cantidadDeseada * precioUnitario)