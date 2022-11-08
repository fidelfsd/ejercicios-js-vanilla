/**
 * Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees.
 */

// definiciones
var numero
var cantidad
var esDivisiblePor2
var esDivisiblePor3
var resultado

// calculo
numero = 1
cantidad = 0
resultado = ''
while (numero <= 100) {
    esDivisiblePor2 = numero % 2 == 0
    esDivisiblePor3 = numero % 3 == 0

    if (esDivisiblePor2 && esDivisiblePor3) {
        resultado = resultado + numero + '\n'
        cantidad++
    }
    numero++
}

console.log('Cantidad:', cantidad)
console.log(resultado)

console.log(typeof resultado)
console.log(typeof cantidad)