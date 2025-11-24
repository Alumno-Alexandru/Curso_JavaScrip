const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado`, precio:100},
    {nombre:`Movil`, precio:700},
]

//Comprobar si un valor existe en un array

meses.forEach(mes =>{
    console.log(`Enero existe`)
});

// Includes solo funciona en un array simple, no funciona en un array de objetos 
// Devuelve verdadero o falso

const resultado = meses.includes("Enero");
console.log(resultado);
const resultado1 = meses.includes(`Agosto`);

// En un array de objetos
// Devuelve verdadero o falso
const existe=carrito.some((producto)=>{
    return producto.nombre === `Tablet`;
});
console.log(existe);
const existe1 = carrito.some((producto)=>producto.nombre === `Tablet`);
// Some tambien soporta array simples
const existe2 =  meses.some(mes=>mes === `Febrero`);