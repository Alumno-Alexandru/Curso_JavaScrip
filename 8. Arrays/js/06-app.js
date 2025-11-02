
const carrito=[];
const producto={
    nombre:"lentejas 300g",
    precio:2
}

const producto1={
    nombre:"tomates 1k",
    precio:2
}

const producto2={
    nombre:"lata de atun",
    precio:1
};

console.table(carrito);

let resultado;
resultado=[...carrito,producto];
resultado=[...resultado,producto1];
resultado=[producto2,...resultado];
console.table(resultado);