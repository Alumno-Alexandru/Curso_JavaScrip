const producto = 'Monitor 20 pulgadas';
const precio = ' 70 euros';

// Unir dos cadenas
console.log(producto.concat(precio)); // Precio no la cambia sigue valiendo Monitor 20 pulgadas

console.log(producto.concat(' 20% de descuento'));

console.log(producto+" con un precio de: " +precio);
console.log(producto, " con un precio de: ", precio);

// Lo que  hemos visto hasta ahora es la version antigua de concatenar

// ECNA SCRIPT 6 template string

console.log(`El producto ${producto} tiene un precio de ${precio}`);
const cesta= "la cesta de la compra";
const precio_c="10%";