//3)Construir una función que sume los elementos de una lista de enteros recursivamente.

//Construimos la funcion
function sumarEnteros(a) {

    //Si el largo de a funcion es 0 retornamos 0 
    if (a.length == 0) {
        return 0
    }
    //Pero si no es 0 vamos sumando los numeros del array hasta llegar al resultado final
    return a[0] + sumarEnteros(a.slice(1))
}

//Cargamos los datos de la funcion y imprimimos el resultado
console.log(sumarEnteros([1, 2, 3]));

