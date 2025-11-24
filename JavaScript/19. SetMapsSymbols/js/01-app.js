

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
console.log(carrito.size);



let numeros = new Set([1,2,3,4,5,5,6,7,3,3,3,3]);
console.log(numeros.size)

console.log(carrito.has('Camisa'));

console.log(carrito.delete('Camisa'));
console.log( carrito.has('Camisa'));
console.log(carrito);

carrito.clear();
console.log(carrito);

carrito.forEach(producto => {
    console.log(producto);
})

carrito.forEach((producto, index, pertenece) =>{
    console.log(`${index} : ${producto}`);
    console.log(pertenece === carrito);
})

const arregloCarrito = [...carrito];
console.log(arregloCarrito);