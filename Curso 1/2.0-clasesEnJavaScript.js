// Clases en JavasScript
// Recordemos que una Clase es una plantilla que nos servira para repartir a varios objetos (Personas o Cosas que hagamos relacionadas a las plantillas que en este caso serian las clases) atributos o metodos relacionados a la plantilla y que se pueda aplicarle a los diferentes objetos que creemos.

class Persona{
    // un " Constructor ", es aquel que nos ayuda a instanciar o crear los parametros y atributos que tendra nuestra clase.
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Get
    get metodoSaludar(){
        console.log(`Hola: ${this._nombre} con Apellido: ${this._apellido}`);
    // Set
    }
    set cambiarNombre(nombre){
        this._nombre = nombre;
    }
};
// Objetos que utilizara la Plantilla o Clase Persona
// objeto 1 o persona creada 1 a partir de la plantilla Persona
let persona1 = new Persona('Adrian', 'Aguirre');
// objeto 2 o persona creada 2 a partir de la plantilla Persona
let persona2 = new Persona('Andres', 'Jaimes');

// Metodos que se utilizan que estan con la Clase Persona
// Metodo Get y Set
persona1.metodoSaludar;
persona2.metodoSaludar; // Recordar que los metodos get y set no son necesarios colocarle los parentesis.

persona1.cambiarNombre = 'Lino';
persona1.metodoSaludar;

// Herencia en Clases JavaScript
// Herencia en POO. Trata de que una Clase herede tanto atributos como metodos de otra clase, asi pudiendo dividir y reutilizar plantillas creadas que requieran los mismos atributos y metodos pero con algunas diferencias.
// En este Caso la Clase Empleado hereda todo de la Clase Persona
class Empleado extends Persona {
    // En el Constructor de la Clase Empleado se debe inicializar las variables que son unicas para esta plantilla o clase e inicializar tambien los parametros que tenga la Clase Padre, en este caso Persona, para que asi nos deje utilizar los atributos que tenga la Clase Padre.
    constructor(nombre, apellido, departamento) {
        // Luego de que inicialicemos todos los parametros de la Clase Padre(Persona), debemos hacer un llamado de esos parametros y atributos y esto se hace por medio de la funcion " super ", que debe estar siempre de primero debajo del constructor hijo.
        super(nombre, apellido); // Lo que se esta haciendo es llamar los parametros del constructor padre a super, para poder utilizarlos

        // Atributos de Empleado
        this._departamento = departamento;
    };
    get obtenerDepartamento(){
        return this._departamento;
    }
    set cambiarDepartamento(departamento){
        this._departamento = departamento;
    }
};

// Objetos de la Clase Empleado
let empleado1 = new Empleado("Adrian", "Aguirre", "Sistemas");
console.log(empleado1);
empleado1.cambiarDepartamento = "Dibujo";
console.log(empleado1.obtenerDepartamento);

