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