const prompt = require('prompt-sync')();
/**
Escribe una aplicación con un String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
aunque le queden intentos).
 */

// definiciones
const secretPassword = "12345"
let userPassword
let repetir
let fallar
let intentos = 3

console.log('A ver si adivinas la contraseña')


do {
    userPassword = prompt('Entra la contraseña ')

    if (secretPassword == userPassword) {
        console.log('Enhorabuena')
        fallar = false

    } else {
        console.log('Has fallado')
        fallar = true
        intentos--
        console.log(`Te quedan ${intentos} intentos`)
    }

    repetir = (fallar == true) && (intentos > 0)

} while (repetir == true);


// repetir-- -> fallar - y - saldo

// si fallo --> quitar 1 intento


/* 
> true && true
true

> true && false
false

> false && true
false

> false && false
false
*/



