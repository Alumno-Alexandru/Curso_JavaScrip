const producto1 = "Monitor 20 Pulgadas";
const producto2 = String('Monitor 24 Pulgadas');
const producto3 = new String('Teclado');

console.log(producto1);
console.log(producto2);
console.log(producto3);

const producto4= String('Monitor 24"'); // No da error
// producto2= "Monitor de 20"" Da error hay que escapar las comillas
const producto5= "Monitor 20 \""; //No da error