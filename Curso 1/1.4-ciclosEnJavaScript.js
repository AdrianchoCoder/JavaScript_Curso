// Ciclos en JavaScript

// Ciclo While --> Este sera un ciclo o bucle infinito hasta que su condicion sea " falsa ", ya que su valor por defecto siempre sera " verdadero ".

let contador = 0; repeticiones = 5;
while(contador <= repeticiones){
    console.log(contador);
    contador++;
}; // Este es un Ejemplo Sencillo del Uso del While Mientras una condicion no se cumpla seguira iterando en bucle hasta que se cumpla la condicion.

// Ciclo do while --> este es lo mismo que while pero la gran diferencia es que almenos en el ciclo del codigo se puede ver almenos una vez antes que se llame la condicion para ver si se cumple o no.
do{
    console.log(contador);
    contador++;
}while(contador < repeticiones);

// Ciclo For --> Nos permitira especificar cuantas veces queremos repetir el bloque de codigo.
for(let contadorFor = 0; contadorFor <= repeticiones; contadorFor++){
    console.log(contadorFor);
}; // Pimero se ejecuta o se instancia la variable que en este caso es " contadorFor ", para luego como segundo paso se revisa la condicion dentro del ciclo for, luego de tercer paso pasa a la ejecucion de la linea de codigo y por ultimo pasa a agregar un valor mas a contadorFor++

// Ejercicio Ciclo For de 3 en 3 hasta 10 y hasta -10
let maximo = 10, minimo = -10;
for(let i = 1; i <= maximo; i += 3){
    console.log(i);
}
for(let i = 1; i >= minimo; i -= 3){
    console.log(i)
}

// Ejercicio Acumular Suma --> Realizar suma de los primeros 5 numeros utilizando for
let sumaAcumulativa = 0, condicionRepeticion = 5;
for(let i = 1; i <= condicionRepeticion; i++){
    console.log(`Los Numeros son: ${i}`);
    sumaAcumulativa = sumaAcumulativa + i;
    console.log(sumaAcumulativa)
};
console.log(`El total de la Suma Acumulativa es: ${sumaAcumulativa}`);

// Ejercicio Acumular Suma --> Realizar suma de los primeros 5 numeros utilizando While
let numero = 1;
let sumaAcumulativaWhile = 0;
while(numero <= condicionRepeticion){
    console.log(`Los Numeros son: ${numero}`);
    sumaAcumulativaWhile = sumaAcumulativaWhile + numero;
    console.log(`Los Numeros Tras la Sumas son: ${sumaAcumulativaWhile}`)
    numero += 1;
};
console.log(`El resultado Final de la suma acumulativa es: ${sumaAcumulativaWhile}`)