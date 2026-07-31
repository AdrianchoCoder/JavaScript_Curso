// Objetos en js

// la diferencia entre una variable normal y un objeto es que un objeto tiene propiedades y metodos o atributos que le pemiten modificar su informacion.

let x = 10; // Esto es una variable normal que tiene un dato
// console.log(x.length) // Como se puede ver el .lenght que permite ver la informacion de un objeto (cuantas propiedades tiene) no se puede aplicar en este caso.

let persona = {
    nombre: 'Adrian',
    apellido: 'Aguirre',
    correo: 'adriandaguirrej@gmail.com',
    edad: 19
} // Como se puede observar esto si es un objeto que en este caso es una " persona ", Que tiene ciertas propiedades o caracteristicas que muestran mas informacion sobre el.
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correo);
console.log(persona.edad);

// Otra forma de Crear Objetos
let persona1 = new Object(); // Esto nos sirve para crear el objeto llamado "persona 1"
// De esta manera se le pueden agregar los atributos o propiedades a este objeto:
persona1.nombre = 'Andres';
persona1.direccion = 'Diagonal 59';
persona1.telefono = '3195939437';
// llamar al objeto con su atributo:
console.log(persona1.nombre);
console.log(persona1.direccion);
console.log(persona1.telefono);

// Agregar, Modificar o Eliminar un Objeto
// Agregar una Propiedad:
persona1.apellido = 'Jaimes'; // De esta forma podemos agregar una nueva propiedad a un objeto.
// Modificar una propiedad:
persona1.nombre = 'Julian'; // De la misma forma que " Agregar " una propiedad se puede utilizar la misma forma para modificar una proiedad.
//Eliminar una Propiedad:
delete persona1.telefono;

console.log(persona1)



// Asi se hace un Bucle para sacar la informacion de las Propiedades de un Objeto en este caso de " Persona ";
// For in: Permite a una variable entrar o estar dentro de...
for (let propiedades in persona) {
    console.log(`${propiedades}: ${persona[propiedades]}`);
};

// Metodos en Js
// Un Metodo nos permite realizar acciones para un objeto asi como hay atributos que son las caracteristicas de ese objeto los metodos son las acciones que puede realizar es objeto.
// Ejemplo:
let persona2 = {
    nombre: 'Adrian',
    apellido: 'Aguirre',
    correo: 'adriandaguirrej@gmail.com',
    edad: 19,

    nombreCompleto(){
        // En los Metodos que estan dentro de los objetos es recomendable usar " this " para acceder a las propiedades que esten dentro del objeto. 
        console.log(`Hola soy: ${this.nombre} ${this.apellido}`);
    } // Este objeto tiene este Metodo que realiza una " Accion de Saludar y concatenar el nombre y el apellido junto "
};
// Acceder al Metodo:
persona2.nombreCompleto(); // como en el Metodo esta el Console.log no es necesario utilizar aqui el Console.log, si en el metodo se utilizara un return aca tendriamos que colocar el console.log.

// Metodo Get y Set

// Metodo Get (Obtener o Conseguir): Este Metodo " Get " nos sirve para obtener el valor de una propiedad metodo pero sin necesidad de tratarla como funcion sino como si fuera una propiedad normal del objeto.
// Ejemplo:
let persona3 = {
    nombre: 'Adrian',
    apellido: 'Aguirre',
    correo: 'adriandaguirrej@gmail.com',
    edad: 19,
    idioma: 'es',

    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); // Set Nos sive para Modificar o cambiar parametros de nuestras propiedades por medio de metodos, en este caso se le pasa el parametro (lang - Lenguaje) para pasarle la propiedad idioma y modificarlo luego.
    }, 

    get nombreCompleto(){ // Se Coloca el GET antes de cualquier metodo
        console.log(`Hola soy: ${this.nombre} ${this.apellido}`);
    }
};
persona3.nombreCompleto; // Como se puede ver aca sin necesidad de colocar los () se puede llamar el metodo como una propiedad normal.

// Metodos para el GET y el SET de Lang
console.log(persona3.lang);

persona3.lang = 'en'; // Con esto se modifica el dato de la propiedad idioma y con este se hace llamado al metodo Set llamado tambien lang.

console.log(persona3.lang);

// Ejemplo mas amplio de ambos:
let persona4 = {
    nombre: 'Adrian',
    apellido: 'Jaimes',
    telefono: 3195939437,
    edad: 19,

    // Get y set
    get obtenerInformacionUsuario(){
        return `Hola soy: ${this.nombre} ${this.apellido}, tengo ${this.edad} y mi numero de telefono es: ${this.telefono}`;
    },
    set modificarInformacionUsuario(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    },

    set modificarEdadUsuarioConValidacion(edad){
        if (edad <= 0){
            console.log('Lo sentimos, la edad no se pudo procesar verifica colocar una edad valida...');
        }else{
            this.edad = edad;
        }
    }
};

//Terminar

console.log(persona4.obtenerInformacionUsuario);