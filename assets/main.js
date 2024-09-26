alert("hola desde main.js")
console.log("hola desde main.js")

// variables let -- se pueden modificar. const, no. 

let x = 10
const y = 5 

let nombre = "erica"
let apellido = "roldán"

console.log(x + y)
console.log(nombre, apellido)
console.log("tu nombre completo es: " + nombre, apellido)


console.log(`tu nombre es: ${nombre} y tu apellido ${apellido} `)

// el usuario pone su nombre y lo guardas en nombreUsuario
// todo lo que escriba se almacena en la nueva variable

const nombreUsuario = prompt("ingrese su nombre y apellido")
console.log("el nombre de usuario es: " + nombreUsuario)