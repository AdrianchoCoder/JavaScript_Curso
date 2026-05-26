// Arreglos en JavaScript
// Un Arreglo nos permite almacenar multiples valores en una sola variable, en lugar de definir varias variables.

// Crear Variable de Arreglos
let arreglos = [];
// Modificar Valores de un Arreglo Manualmente
arreglos[0] = 5;
arreglos[1] = 6;
arreglos[3] = 8;
arreglos[4] = 9;
console.log(arreglos);

// Modificar los Arreglos de forma facil y simplificada
let arreglos2 = [10, 20, 30, 40, 50]
console.log(arreglos2)

// Usando un solo Arreglo para Imprimir los dias de la Semana
let diasDeLaSemana = [' ' ,'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
for (let i = 1; i < diasDeLaSemana.length; i++) {
    console.log(`${i}: ${diasDeLaSemana[i]}`)
}

// Para Practicar con dos Arreglos para Imprimir los dias de la Semana
// Lo que se hace es que se crea " Numeros de la Semana" Vacio y luego se agregan con el indice del for " i " los Numeros Correspondientes a la iteracion del arreglo " Dias ". Asi obtenemos que "Numeros de la Semana" son los Numeros de cada "Dia de la Semana"
let numerosDeLaSemana = [];
let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
for (let i = 0; i < dias.length; i++) {
    numerosDeLaSemana[i] = i;
    console.log(numerosDeLaSemana[i])
    console.log(`${numerosDeLaSemana[i]}: ${dias[i]}`)
}

// Hacer Actividades en Html, Css y Javascript de usos de Arreglos.