const pendientes=['Limpiar la cocina', 'Estudiar JavaScript', 'Hacer la cama', 'Ducharse'];

pendientes.forEach((pendiente)=>{
    console.log(pendiente);
})

pendientes.forEach((pendiente)=>console.log(pendiente))
pendientes.forEach(pendiente=>console.log(pendiente))

pendientes.forEach((pendiente,indice)=>console.log(`${indice}:${pendiente}`))

const carrito=[
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Television', precio:100,},
    {nombre:'Tablet', precio:200}
]

carrito.forEach(producto=> console.log(producto.nombre));
carrito.map(producto=> console.log(producto.nombre));

const nuevoArray=carrito.forEach(producto => producto.nombre);

const nuevoArray2=carrito.map(producto => producto.nombre);
console.log(nuevoArray)
console.log(nuevoArray2)