/**
Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá por teclado (recuerda pasar de String a double con parseDouble). Usa la constante PI.
 */

// variables
var radio
var area

// leer datos
radio = prompt('Entre el radio del circulo')
radio = Number(radio)

// calculo
area = Math.PI * (radio ** 2)
//area = Math.PI * Math.pow(radio, 2)

// imprimir resultados
console.log(`El area del circulo es ${area}`)