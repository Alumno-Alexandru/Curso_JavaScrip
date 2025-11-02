const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado`, precio:100},
    {nombre:`Movil`, precio:700},
];

let meses2 = [...meses,`Agosto`];
meses2=[`Septiembre`,...meses];

// Esto no modifica el array original 

console.log(meses2);
meses.push(`Septiembre`);
// Este si modifica el array original

let producto = {
    nombre: `Disco duro`, precio: 300
}

const carrito2 = [...carrito, producto];
console.log(carrito2);