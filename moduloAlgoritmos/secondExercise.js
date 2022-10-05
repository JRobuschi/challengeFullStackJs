//Requerimos las prompt que las usamos para pedir que el usuario ingrese un numero
const prompt = require("prompt-sync")({ sigint: true });

//Como tenemos solamente 3 chances arrancamos con i en 3 y le vamos restando, se podria tambien hacer sumando
for (let i = 3; i > 0; i--) {

    let contraseña;
    let confirmContraseña;

    //ingresamos un valor
    if (i == 3) {
        contraseña = prompt('Ingresa una Contraseña: ');
    }

    //ingresamos la confirmacion
    confirmContraseña = prompt('Ingresa nuevamente la Contraseña: ');

    //y ponemos la logica para ver si coinciden o no
    if (contraseña === confirmContraseña) {
        console.log('Felicitaciones, recordás tu contraseña')
        break
    } else {
        console.log('te quedan ', i - 1, 'intentos');
    }
    //A esta parte llega cuando no completo las dos contraseñas iguales
    if (i == 1 & contraseña != confirmContraseña) {
        console.log('Tenes que ejercitar la memoria')
    }
}


