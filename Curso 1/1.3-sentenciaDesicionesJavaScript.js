// Sentencia if
// if Es una Condicional que nos permite revisar si nuestra condicion es verdadera
let num = 5;
if (num > 0){
    console.log('El Numero Es Mayor!', num);
}
// Sentencia if else
// Ahora la condicion puede ser Verdadera ( if ) o puede ser falsa ( else )
if (num > 0){
    console.log('El Numero es Mayor!');
}
else{
    console.log('El Numero es Menor o es Negativo');
}
// Sentencia if - else if - else
// Podremos agregar con ' else if ' mas condiciones a nuestro codigo para verificar si es verdadera.
let miNumero = 10;
if (miNumero >= 0){
    console.log('Tu Numero es Positivo');
}
else if (miNumero < 0){
    console.log('Tu Numero Es Negativo');
}
else{
    console.log('Verifica que tu Numero sea un Numero!');
}
// Como se Puede Observar Esto es un buen uso de ' if - else if - else ' ya que se agregan mas condiciones para que no hayan errores en nuestro codigo.

// Operador Ternario --> Es una simplificacion del if else
(miNumero >= 0) ? console.log('Positivo') : console.log('Negativo');

// Ejemplo Mayor de Edad Usuario
const MAYOR_EDAD = 18;
let user_edad = 0;
if (user_edad >= MAYOR_EDAD){
    console.log(`El usuario con edad: ${user_edad} es mayor de edad`);
}
else if (user_edad < 18 && user_edad > 0){
    console.log(`El Usuario de edad: ${user_edad} es menor de edad`);
}
else{
    console.log(`Lo siento, revisa que el dato ingresado sea numerico o Positivo.`);
}

// Ejemplo Dia de la Semana
let diaSemana = 'Sabado';
if (diaSemana == 'Lunes'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Martes'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Miercoles'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Jueves'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Viernes'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Sabado'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else if (diaSemana == 'Domingo'){
    console.log(`El dia de hoy es: ${diaSemana}`);
}
else{
    console.log('Verifica que sea uno de los dias de la semana');
}