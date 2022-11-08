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

// variables
var operando1 // numero
var operando2 // numero
var resultado // numero
var operacion // string

// leer datos
operando1 = prompt('Entre operando 1')
operando1 = Number(operando1)

operando2 = prompt('Entre operando 2')
operando2 = Number(operando2)

operacion = prompt('Entre operación')

// calculo
if (operacion == '+') {
    resultado = operando1 + operando2
} else if (operacion == '-') {
    resultado = operando1 - operando2
} else if (operacion == '*') {
    resultado = operando1 * operando2
} else if (operacion == '/') {
    resultado = operando1 / operando2
} else if (operacion == '^') {
    resultado = operando1 ** operando2
} else if (operacion == '%') {
    resultado = operando1 % operando2
}

// imprimir resultado
console.log(resultado)


