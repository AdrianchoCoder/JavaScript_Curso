// Operadores Aritmeticos --> Los Operadores que Utiliza JavaScript son los Siguentes:
// Suma:
let numeroSumaA = 10;
let numeroSumaB = 20;
let resultado1 = numeroSumaA + numeroSumaB;
console.log(resultado1);

// Resta:
let numeroRestaA = 10;
let numeroRestaB = 5;
let resultado2 = numeroRestaA - numeroRestaB;
console.log(resultado2);

// Multiplicacion:
let numeroMultiplicacionA = 3;
let numeroMultiplicacionB = 5;
let resultado3 = numeroMultiplicacionA * numeroMultiplicacionB;
console.log(resultado3);

// Division:
let numeroDivisionA = 10;
let numeroDivisionB = 2;
let resultado4 = numeroDivisionA / numeroDivisionB;
console.log(resultado4);

// Modulo (Residuo Division):
let resultado5 = 10 % 2;
console.log(resultado5);

// Potencia:
let resultado6 = 10 ** 2;
console.log(resultado6);



// Operadores de Incremento y Decremento en JavaScript
let a,b,c;
// Pre - Incremento --> La Variable se Incrementa no mas colocar el pre incremento no hay que esperar que se vuelva a utilizar la variable
a = 0;
++a;
console.log(a);
// Post - Incremento --> A diferencia del Pre Incremento en el Post incremento luego de volver a utilizar la variable esta incrementara su valor, hasta la proxima vez que se vuelva a utilizar la variable.
a++;
console.log(a);

// Pre - Decremento --> Es lo mismo pero en este caso su valor se decrementa se reduce
--a;
console.log(a)
// Post - Decremento --> Lo mismo que el Post Incremento
a--;
console.log(a)

// Ejemplo:
a = 5;
b = 2;
c = ++a * b--; // Que es lo que ocurre aqui, si recordamos la variable ' a ' se incrementa porque aunque su valor sea 5 se hace un ' Pre Incremento ' que increnmenta su valor asi sea que aun no se haya utilizado, mientras que en la Variable ' b ' se mantiene su valor ya que aun no se ha utilizado la variable ' b ' como tal y tiene un decremento pendiente.
console.log(c);
console.log(a);
console.log(b); // Aqui se puede ver como se hace el decremento pendiente que habia ya que se vuelve a utilizar la variable.



// Operadores de Asignacion
// Asignacion --> este operador es de toda la vida que permite asignar un valor a una variable tambien pudiendo modificar su valor
let miNumero = 10;
miNumero = 20;
console.log(miNumero); // Se Modifica su Valor a 20

// Asignacion += ( Suma )--> Este lo que hace es incrementar el valor de la variable sumandolo por un valor que coloquemos.
miNumero += 10; // Lo que ocurre es que la variable pasa hacer 30 porque se realiza esta operacion miNumero = miNumero + 10 --> Esto es lo que significa la operacion de ' Asignacion += '
console.log(miNumero);
// Asignacion -= ( Resta )
miNumero -= 5;
console.log(miNumero);
// Asignacion *= ( Multiplicacion )
miNumero *= 2;
console.log(miNumero);
// Asignacion /= ( Division )
miNumero /= 2;
console.log(miNumero);
// Asignacion **= ( Potencia )
miNumero **= 2;
console.log(miNumero);
// Asignacion %= ( Modulo Residuo)
miNumero %= 2;
console.log(miNumero);



// Operadores de Comparacion
// Supogamos que tenemos dos variables con valores similares pero no iguales
a = 5;
b = '5';
// Cuando Comparemos ambos valores dara un resultado dependiendo del operador de comparacion

// Operador de Igualdad ( == ) --> Solo Compara ' Valores ' y hace una conversion si es necesario, cambia el tipo de dato.
console.log('a == b --> ', a == b); // Este resultado da True ya que ambos valores son iguales aumque sus tipos de datos sean diferentes lo que hace que se haga una conversion automatica para que ambos sean similares.
// Operador Igualdad Estricta o Exacto ( === ) --> Este si es mas estricto ya que compara tanto el valor como el tipo de dato lo que hace que si no son iguales tanto en ' valor como en tipo de dato ' mostrara un resultado falso o que no son iguales.
console.log('a === b ', a === b);

// String Interpolation --> Con String interpolation Podemos agregar nuestras variables o datos dentro de la misma cadena de texto, utilizando los back-stick ' `` '.
console.log(`a === b --> ${a === b}`); // Como se puede observar aca se utilizan los back-stick

// Operador Distinto ( != ) --> Compara valores y convierte el tipo de dato si es necesario.
console.log(`${a} != ${b} --> ${a != b}`); // En este caso da ' false ' porque ambos valores son iguales por lo que hace una conversion de los datos para que ambos coincidan, asi pues no son distintos estos dos tipos de datos.
// Operador Distinto Estricto o Exacto ( !== ) --> Compara tanto el valor como el tipo de dato para saber si es distinto los datos.
console.log(`${a} != ${b} --> ${a !== b}`); // Aqui da True porque ambos datos son diferentes ya que aqui si, se compara tanto tipo de dato como el valor.

// Operador Menor que ( < )
console.log(`${a} < ${b} --> ${a < b}`); // Es falso porque 5 no es menor que 5 ademas que aqui tambien se aplica la conversion de datos.
// Operador Menor o Igual que ( <= )
console.log(`${a} <= ${b} --> ${a <= b}`); // Da True Porque ambos son iguales ya que si es menor igual estaria correcto

// Operador Mayor que ( > )
console.log(`${a} > ${b} --> ${a > b}`); // Es falso porque 5 no es menor que 5 ademas que aqui tambien se aplica la conversion de datos.
// Operador Mayor o Igual que ( >= )
console.log(`${a} >= ${b} --> ${a >= b}`); // Da True Porque ambos son iguales ya que si es menor igual estaria correcto


// Operadores Logicos
a = true;
b = false;
// Operador Logico ( and - Y) --> &&
console.log(`${a} && ${b} --> ${a && b}`); // Recordar que dara un Resultado ' True ', si ambos datos son verdaderos sino daran false
// Operador Logico ( Or - O ) --> ||
console.log(`${a} || ${b} --> ${a || b}`); // En este Caso, da True porque se cumplen almenos una de los datos ya que uno de los datos es ' True ' osea que como es verdadero pasa el resultado hacer ' true ' solo dara false cuando ambos datos son falsos.
// Operador Logico ( Not - No ) --> !
console.log(`${a} --> ${!a}`); // Lo que hace El operador Logico ' Not ' es que invierte el valor que esta dentro de la variable en este caso estaba en ' True ' para luego pasar a ser ' False '.

// Ejemplo Valor dentro del Rango
let minimo = 0, maximo = 5;
let dato = 3;
let dentroRango = dato >= minimo && dato <= maximo;
console.log(`El Dato ${dato} esta dentro del Rango: ${dentroRango}`);
// Este Ejercicio nos muestra como podemos utilizar los operadores logicos con los operadores de comparacion, asi creamos un comparador de datos donde comparamos si un dato estaba dentro de un rango de numeros en este caso el minimo que es 0 y el maximo que es 5.