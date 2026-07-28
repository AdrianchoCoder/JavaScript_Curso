// Funciones Incorporadas
// Son aquellas que stan ya dentro del lenguaje de javascript que nos permite modificar de manera mas sencilla una cadena de texto.
// Por ejemplo: Un " Slug "(parte final y amigable de una direccion web (URL) que identifica una pagina especifica en terminos legibles para humanos y motores de busqueda.), que transforma los titulos de los articulos en enlaces web limpios.
function generarSlug(titulo) {
    return titulo
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-")
}
// Uso en el Sistema:
const tituloArticulo = "¡10 Consejos Para Programar Mejor en 2026! ";
console.log(generarSlug(tituloArticulo));

// SubCadena en Js
// Las Subcadenas sirven para extraer, manipular y analizar fragmentos especificos de texto dentro de una cadena mas grande.
// Por Ejemplo: En Software Real, se utilizan para formatear datos crudos, validar estructuras de etxto(como correos o contraseñas) y limpiar informacion introducida por el usuario.

let cadena3 = "Hola Mundo";
let cadena1 = cadena3.substring(0,4);
let cadena2 = cadena3.substring(5,10);
console.log(cadena1);
console.log(cadena2);

// Ejemplo: Ofuscar(ocultar) correos electronicos por privacidad
function ofuscarEmail(email) {
    const posicionArroba = email.indexOf("@");// Sirve para saber con exactitud donde esta el Arroba en el posicionamiento de arreglos, que posicion toma el arroba
    const InicioNombre = email.substring(0,3); // Sirve para elegir la posicion que queremos que se muestre de la cadena de texto o en este caso del correo.
    const dominio = email.substring(posicionArroba); // Extrae todo el dominio desde la @ hasta el final
    return `${InicioNombre}*****${dominio}`;
}
console.log(`Antes: adriandaguirrej@gmail.com`)
console.log(ofuscarEmail("adriandaguirrej@gmail.com"));

// Valor Absoluto Js
// Sirve para convertir cualquier valor numerico negativo en positivo y dejar los positivos igual. Sirven para calcular distancias, medir diferencias numericas y controlar tolerancias de errores.
// Un ejemplo: de esto es cuando calculamos para saber cuantos kilometros esta un usuario de un punto usando coordenadas sin importar si el resultado es un valor negativo.
let num = -10;
let valorAbsoluto = Math.abs(num);
console.log(valorAbsoluto);

// Round y Truncado en Js
let numero = 10.5, 