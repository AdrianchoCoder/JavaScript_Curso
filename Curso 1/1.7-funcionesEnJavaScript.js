// Funciones

// Ejemplo:

// Diferencia Entre parametro y argumento:
// Parametro: Un parametro en una funcion, es un valor que le pasamos a la funcion que debe analizar  utilizando de manera local la variable que en este caso es el " parametro ".
// Argumento: Un Argumento es un valor en enviado a la funcion desde el parametro.

// Ejemplo Parametro:
function imprimir(parametro /* Este es el parametro */) {
    console.log(parametro);
}
imprimir(100);

// Ejemplo argumento:
numero = 200; // Argumento que se le pasa a la funcion " valor ".
parametro = numero;
function imprimir2(parametro) {
    console.log(parametro)
}
imprimir2(parametro);

// Diferencia Entre Procedimiento y Funcion:
// Funcion Procedimiento (No regresa ningun valor): Este tipo de funcion nos permite utilizar una funcion y no devolver ningun valor se utiliza simplemente para mostrar la informacion que queramos mostrar y ya luego se termina la funcion no se guarda esa informacion.
//Ejemplo:
function procedimiento(parametro) {
    console.log(parametro);
}
procedimiento("Hola esta es una funcion Procedimiento que no guarda ningun valor, solo lo muestra");

// Funcion funcion (regresa un valor): A diferencia del otro esta funcion si permite regresar un valor al codigo principal se utiliza por lo usual para operaciones que requieras regresar algun valor para el codigo principal.
let a = 10, b = 5;
function funcion(parametro) {
    let resultado = a + b;
    return resultado; /*Como Pueden ver se utiliza " return ", para devolver el valor que esta dentro de la variable " resultado ", que se utilizara luego para el codigo principal.*/
}
let c = funcion(a,b);
console.log(c);

// Funciones Recursivas: Es una funcion que se llama asi misma para resolver y dividir los problemas, tantas veces como sea necesario hasta llegar a una solucion. Ademas esta si o si debe avanzar a resoler el problema si no se podria llegar a ciclos infinitos.

// Imprimir 3 2 1
function funcionRecursiva(numero) {
    // caso base
    if (numero == 1){
        console.log(numero);
    }
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}
// Se llama la funcion recursiva
funcionRecursiva(3);


