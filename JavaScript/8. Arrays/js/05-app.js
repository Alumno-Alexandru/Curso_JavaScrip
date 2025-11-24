const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

//Agregar al final del arreglo
meses.push('Julio');
meses.unshift('EnJul');
const pila1=meses.pop();//Elimina el último elemento y lo devuelve
const cola2=meses.shift();//Elimina el primer elemento y lo devuelve
console.log(pila1);
console.log(cola2);

console.table(meses);

const carrito=[];
const producto={
    nombre: "lentejas 300g",
    precio:2
}

carrito.push(producto);
console.table(carrito);
producto.nombre="Aceite 1L";
producto.precio=4;
carrito.push(producto);//al modificar el producto, se modifica en el carrito
console.table(carrito);

const producto1={
    nombre: "lentejas 300g",
    precio:2
}

carrito.push(producto1);//al modificar el producto, se modifica en el carrito
console.table(carrito);

const producto2={
    nombre: "lata de atun",
    precio:1
};