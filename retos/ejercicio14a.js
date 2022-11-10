const prompt = require('prompt-sync')();
/**
 * Crea un programa que pida al usuario un
número, y de este, generé su tabla de multiplicar del 0 al 10.
 */

// definiciones
var numero

// leer datos
do {
    numero = prompt('Entre número: ')
    numero = Number(numero)

    if (!numero)
        console.log('Error, debe entrar un número')


} while (!numero);


console.log(numero)