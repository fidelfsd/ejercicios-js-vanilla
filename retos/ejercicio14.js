const prompt = require('prompt-sync')();
/**
 * Crea un programa que pida al usuario un
número, y de este, generé su tabla de multiplicar del 0 al 10.
 */

// definiciones
var numero
var mensaje = ''

// leer datos

do {
    numero = prompt('Entre número: ')
    numero = Number(numero)

    esUnNumero = !isNaN(numero)

    // if (!esUnNumero) {
    //     mensaje = 'Error, debe entrar un número'
    // } else {
    //     mensaje = ''
    // }

    mensaje = (!esUnNumero) ? 'Error, debe entrar un número' : ''

    console.log(mensaje)

} while (!esUnNumero);



while (condition) {

}


console.log(numero)