// Repeater te va a premitir repetir una cadena de texto
const producto= 'Monitor 20 Pulgadas ';
const productos= 'ordenador, tablet, disco, pantalla, teclaxdo '
const texto='en promocion'.repeat(3);
console.log(texto);

console.log(`${producto} ${texto} !!!!`);

//Split divide un string
const actividad= 'Estoy aprendiendo JavaScript moderno';
console.log(actividad.split(' ')); // divide la cadena por los espacios en blanco

const hobbies= 'Leer, escuchar musica, escribir, pintar';

console.log(hobbies.split(', '));

//cadena = "Pedro esta con su amigo Pedro Maria y Pedro Jose"
// regex = /Pedro/g
// total= cadena.match(regex);
// console.log(total.length)

//  cadena="profesor.sebastianrv@ies-azarquiel.es"
// cadena2=cadena.split("@");
// console.log(cadena2[1]);