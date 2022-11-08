const prompt = require('prompt-sync')();
/**
Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, también debemos indicarlo. */

// variables
var numero

// leer datos
numero = prompt('Entre número')
numero = Number(numero)


// calculo
if (!isNaN(numero)) {

    if (numero % 2 == 0) {
        console.log(`El número ${numero} es divisible por 2`)
    } else {
        console.log(`El número ${numero} no es divisible por 2`)
        console.log('El número ' + numero + ' no es divisible por 2')
    }

} else {
    console.log('No has introducido un número')
}