//Requerimos las prompt que las usamos para pedir que el usuario ingrese un numero
const prompt = require("prompt-sync")({ sigint: true });

//Planteamos las variables del minimo y maximo numero que se nos plantea en el ejercicio que son 0 y 1000
var min = 0;
var max = 1000;
var numElegido;

// Esta es nuestra variable x que nos genera nuestro numero aleatorio entre los minimos y maximos que estamos buscando
var x = Math.floor(Math.random() * (max - min + 1) + min);

//Siempre ingresamos al while por que x va a ser distinto de un espacio vacio que es como arranca la variable numElegido
while (x != numElegido) {

    //El usuario ingresa el valor
    numElegido = prompt('Adivina el numero escogido por el ordenador: ');

    //Se aplica la logica para saber que numero es
    if (x == numElegido) {
        console.log('Felicitaciones, el numero era el: ', x, '!!')
        break
    } else if (x < numElegido) {
        console.log('El numero es menor')
    } else {
        console.log('El numero es mayor')
    };
}



