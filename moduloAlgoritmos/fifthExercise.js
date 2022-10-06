//Requerimos las prompt que las usamos para pedir que el usuario ingrese un numero
const prompt = require("prompt-sync")({ sigint: true });

//Las variables que tilizamos y el array de numeros
let numeros = [];
var individual;

//Con este while puede el usuario interactuar agregando numeros hasta que ponga un -1
while (individual != -1) {

    individual = prompt('Ingresa una Numero, si ingresas -1 cortas las secuencia: ');

    if (individual == -1) {
        break
    } else {
        numeros.push(individual)
    }
}

//Con esta funcion sabemos si el dato es un numero o no, para despues en la funcion sumar contenido sea solo una suma de numeros
function esNumerico(dato) {
    return !isNaN(parseFloat(dato)) && isFinite(dato);
}

//En esta funcion se suman los numeros del array 'Numeros'
function sumarContenido(contenido) {

    if (!Array.isArray(contenido)) {
        return null;
    }

    var suma = 0;

    for (let i = 0; i < contenido.length; i++) {
        const elemento = contenido[i];

        if (esNumerico(elemento)) {
            suma += parseFloat(elemento);
        }

    }

    return suma;
}

//En esta funcion se encuentra el mayor numero
function mayor(numeros) {
    return Math.max.apply(null, numeros);
}

//En esta funcion se encuentra el menor numero
function menor(numeros) {
    return Math.min.apply(null, numeros);
}

//Mostramos por consola los que nos pide el ejercicio
console.log('Mayor numero: ', mayor(numeros));
console.log('Menor Numero: ', menor(numeros));
console.log('Resultado de la suma de los numeros: ', sumarContenido(numeros));
console.log('Cuenta para llegar a ese resultado: ', (numeros), ' total:', sumarContenido(numeros));