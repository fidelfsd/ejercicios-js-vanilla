const prompt = require('prompt-sync')();
/**
Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
un signo aritmético (String), según este último se realizará la operación
correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
Los signos aritméticos disponibles son:

+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1o operando como base y 2o como exponente.
%: módulo, resto de la división entre operando1 y operando2.

*/

/**
 * Usando funciones
 */

// definicion de funciones
function suma(numero1, numero2) {
    return numero1 + numero2
}

// variables
var operando1 // numero
var operando2 // numero
var resultado // numero
var signo // string

// leer datos
operando1 = prompt('Entre operando 1: ')
operando1 = Number(operando1)

operando2 = prompt('Entre operando 2: ')
operando2 = Number(operando2)

signo = prompt('Entre operación (+, -, *, /, ^, %): ')



// calculo
switch (signo) {
    case '+':
        // llamada a suma
        resultado = suma(operando1, operando2)
        break;

    default:
        break;
}




// imprimir resultado
console.log(`${operando1} ${signo} ${operando2} = ${resultado}`)
console.log(prueba)





