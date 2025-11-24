const carrito=[
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Auriculares', precio:300},
    {nombre: 'Teclado', precio:100},
]

const nuevoArray1=carrito.forEach((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`;
});

const nuevoArray2=carrito.map((producto)=>{
    return `${producto.nombre}-Precio:${producto.precio}`;
});

console.log(nuevoArray1);
console.log(nuevoArray2);


const nuevoArray3=carrito.map(producto=>{
    return `${producto.nombre}-Precio:${producto.precio}`;
})

console.log(nuevoArray3);

const nuevoArray4=carrito.map(producto=>`${producto.nombre}-Precio:${producto.precio}`);

console.log(nuevoArray4);