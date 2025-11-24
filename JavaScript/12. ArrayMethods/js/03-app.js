const carrito = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado`, precio:100},
    {nombre:`Movil`, precio:700},
]

let total= 0;
carrito.forEach(producto => total += producto.precio);

console.log(total);

let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
// TOTAL SE INICIA A CERO, QUE SE CORRESPONDE CON EL ÜLTIMO PARÄMETR
console.log(resultado);
let resultado2 = carrito.reduce((total, producto) => total + producto.precio, 200);
//Total se inicia a 200
console.log(resultado2);