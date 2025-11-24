
const carrito=[];
const producto={
    nombre:"lentejas 300g",
    precio:2
}

const producto1={
    nombre:"Tomates 1k",
    precio:2
}

const producto2={
    nombre:"lata de atun",
    precio:1
}

const producto3={
    nombre:"ensalada",
    precio:1
}

carrito.push(producto);
carrito.push(producto1);
console.table(carrito);
carrito.push(producto2);
console.table(carrito);
carrito.shift();
console.table(carrito);
carrito.shift();
console.table(carrito);
carrito.shift();
console.table(carrito);


console.log("pila");

carrito.unshift(producto);
carrito.unshift(producto1);
console.table(carrito);
carrito.unshift(producto2);
carrito.unshift(producto3);
console.table(carrito);

carrito.pop();
console.table(carrito);