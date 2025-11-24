const carrito=[
    {nombre:'Monitor 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200},
    {nombre:'Auriculres', precio:300},
    {nombre:'Teclado', precio:100},
    {nombre:'Movil', precio:700}
];

carrito.forEach(function(producto){

})

carrito.map(function(producto){

})

const nuevoArray1=carrito.forEach(function(producto){
    return '${producto.nombre}-Precio:${producto.precio}';
});

const nuevoArray2=carrito.map(function(producto){
    return '${producto.nombre}-Precio:${producto.precio}';
});

console.log(nuevoArray1);