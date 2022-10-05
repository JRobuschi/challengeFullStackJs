//Requerimos las prompt que las usamos para pedir que el usuario ingrese un numero
const prompt = require("prompt-sync")({ sigint: true });

//Guardamos las variables
let valor;
let nombre;
let antiguedad;
let horasTrabajadas;

//Ingresamos los datos
valor = prompt('Ingresa el Valor/Hora: ');
nombre = prompt('Ingresa su Nombre: ');
antiguedad = prompt('Ingresa años de antiguedad: ');
horasTrabajadas = prompt('Ingresa las horas trabajadas en el mes: ');

//El 'if' es para cuando tiene mas de 10 años de antiguedad y el 'else' para cuando tiene menos de 10 o 10 años de antiguedad
if (antiguedad > 10) {
    var totalACobrar = (antiguedad * 30) + (valor * horasTrabajadas)
    console.log('Nombre: ', nombre);
    console.log('Antiguedad: ', antiguedad, 'años');
    console.log('Total a Cobrar: $', totalACobrar);
} else {
    var totalACobrar = (valor * horasTrabajadas)
    console.log('Nombre: ', nombre);
    console.log('Antiguedad: ', antiguedad, 'años');
    console.log('Total a Cobrar: $', totalACobrar);
}
