//Utilizamos todas estas funciones como controlador para manejarnos con las pilas
class Stack {

    //Iniciamos el espacio de memoria, decimos que hay un 0 arriba
    constructor() {
        this.items = [];
        this.top = 0;
    };

    //Agragamos un objeto a la pila
    push(data) {
        this.items[this.top] = data;
        this.top++;
    };

    //Lo utilizamos para borrar un dato
    unStack() {
        let deleteData;
        this.top--;
        deleteData = this.items.pop();
        return deleteData;

    };

    //Sabemos que numero tenemos en el top
    getSize() {
        return this.top;
    };

    //Detectamos si la pila esta vacia
    isEmpty() {
        if (this.getSize() == 0) {
            return true;
        } else {
            return false;
        }
    };

    //Se usa para cuando una pila esta vacia retornar un null o el numero de arriba de la pila
    peek() {
        if (this.isEmpty()) {
            return null;
        };

        return this.items[this.top - 1];
    };

    //Nos muestra los items
    print() {
        console.log(this.items)
    }

};

//Creamos y llenamos la pila
let pila = new Stack();
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
pila.push(5);
pila.push(6);
pila.push(7);
pila.push(8);
pila.push(9);

//Hacemos la funcion reemplazar y le damos su logica
function Reemplazar(pila, num1, num2) {
    let stack2 = new Stack();
    let stack3 = new Stack();
    let aux;

    while (!pila.isEmpty()) {

        if (pila.getSize() == num2) {

            aux = pila.unStack();
            stack3.push(aux);
            stack2.push(num1);
        } else {
            aux = pila.unStack();
            stack2.push(aux);
        };
    };
    while (!stack2.isEmpty()) {
        aux = stack2.unStack();
        pila.push(aux);
    }

};

//Cargamos datos para hacer andar la funcion
Reemplazar(pila, 1, 3);

//Mostramos como queda la pila despues de ser procesada por la funcion
console.log(pila);