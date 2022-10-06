let enteros = [2, 4, 5, 1, -4, 4, 23, 5, 4, 75, -2, 90, -342, 4];
let numeroEntero = 4;

//Con filter filtramos todos los datos que no sean iguales a nuestro numero entero, y mostramos todos esos datos
let resultado = enteros.filter(numero => numero != numeroEntero);
console.log(resultado);



