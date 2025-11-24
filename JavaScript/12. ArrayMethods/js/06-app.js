const carrito = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado`, precio:100},
    {nombre:`Movil`, precio:700},
];

// Todos los elementos de un array deben cumplir la condicion
// paraque devuelva true

let resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado); // true
resultado = carrito.every(producto => producto.precio < 400);
console.log(resultado); // false

