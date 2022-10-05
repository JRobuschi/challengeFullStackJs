//Requerimos las prompt que las usamos para pedir que el usuario ingrese un numero
const prompt = require("prompt-sync")({ sigint: true });

//Aca guardamos las variables
let numero;
let esNumeroPrimo = true;

//El usuario ingresa el numero
numero = prompt('Ingresa un Numero: ');

//Aca le aplicamos la logica para saber si es o no un numero primo
for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
        esNumeroPrimo = false;
    }
}

//Y con esto imprimimos en pantalla el resultado, monemos la variable 'numero' para que muestre el numero adelante del resultado
if (esNumeroPrimo) {
    console.log(numero, ' Si es un Numero Primo');
} else {
    console.log(numero, ' No es un Numero Primo');
}