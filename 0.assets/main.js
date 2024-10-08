alert("Hola desde main.js")
alert("PROFE, EL TRABAJO ANTERIOR ESTABA MAL PORQUE NO ERA EL QUE TENIA QUE CORREGIR")
console.log("hola desde main.js")

let x = 10
const y = 5
console.log(x + y)

// ---------------------------

// el usuario pone su nombre y lo guardas en nombreUsuario
// todo lo que escriba se almacena en la nueva variable

const nombreUsuario = prompt("Ingrese su nombre y apellido")
console.log("el nombre de usuario es: " + nombreUsuario)

// --------------------------

const nombreProducto = "F-16 Fighting Falcon"
let precioUnitario = 2000
alert(`El costo de cada ${nombreProducto} es de $${precioUnitario}`)

let cantidadDeseada = parseInt(prompt(`¿Cuantos ${nombreProducto} desea adquirir?`));
let costoTotal = precioUnitario * cantidadDeseada;

console.log(`El total de la compra es $${costoTotal}`);


// para aplicar un porcentaje del 10% a la cantidad seleccionada que sea >= a 5

if(cantidadDeseada >= 5) {
    let porcentaje = (precioUnitario * 10) / 100; // calculo del 10% (la cantidad)
    let descuento = costoTotal - porcentaje; // el costo total del producto restandole el descuento
    alert(`Se le ha realizado un descuento del 10% (-$${porcentaje}), el costo total de su compra es $${descuento}`)
}

else{
    alert(`El costo total de su compra es: \n$${costoTotal}`);
}