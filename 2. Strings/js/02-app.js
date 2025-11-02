const producto ='Monitor 20 pulgadas';

// Propiedades de los strings

// Longitud de una cadena
console.log(producto.length); // Devuelve la longitud de la cadena

//Localizar una palabra
console.log(producto.indexOf('Monitor')); // Devuelve 0, que es la posuicion en la que comienza
variable = producto.lasIndexOf('Monitor');

console.log(producto.indexOf('pulgadas')); // Devuelve 11, que es la posicion en la que comienza la palabra

console.log(producto.indexOf('Tablet')); // Devuelve -1 que significa que no lo ha encontrado

// Si la cadena tiene varias palabras iguales, hara referencia a la primera encontrada

//para encontrar  la ultima ocurrencia

"Ballena Azul, Ballena Asesina".lastIndexOf("Ballena");

// Include es case sensitive
console.log(producto.includes('Table')); // Devuelve False

const hello = 'Hola Mundo';
const helloLength = hello.length;
hello[0] = 'L'; // Esto no tiene efecto, porque las cadenas son inmutables 
hello[1]; // Esto devuelve "H"

var mivar = "Esto es otra variable";
mivar[3]="H";
console.log(mivar);