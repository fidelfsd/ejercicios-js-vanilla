const prompt = require('prompt-sync')();
/**
Lee un número por teclado que pida el precio de un producto (puede tener decimales) y calcule el precio final con IVA. El IVA sera una constante que sera del 21%
*/

// variables
var precio
const IVA = 0.21

// leer datos
precio = prompt('Entre precio')
precio = Number(precio)

// calculo con IVA
precio = precio + precio * IVA
//precio += precio * IVA

// imprimir resultado
console.log('El precio con IVA es ' + precio)
