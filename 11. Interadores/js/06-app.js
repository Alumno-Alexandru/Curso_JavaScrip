const pendientes=['Limpiar la cocina', 'Estudiar JavaScript', 'Hacer la cama', 'Ducharse'];

const carrito=[
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Television', precio:100,descuento:True},
    {nombre:'Tablet', precio:200}
];

for (let pendientes of pendientes){
    console.log(pendientes);
}

for (let producto of carrito){
    console.log(producto.nombre);
}