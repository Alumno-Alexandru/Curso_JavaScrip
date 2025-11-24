const carrito = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado`, precio:100},
    {nombre:`Movil`, precio:700},
]

const carrito2 = [
    {nombre:`Monitor 27 pulgadas`, precio:500},
    {nombre:`Televisor`, precio:100},
    {nombre:`Tablet`, precio:200},
    {nombre:`Auriculares`, precio:300},
    {nombre:`Teclado Apple`, precio:400},
    {nombre:`Movil`, precio:700},
]

let resultado = ``;
carrito.forEach((producto,index)=>{
    if(producto.nombre===`Tablet`){
        resultado=carrito[index];
    }
});

// Con el find obtenemos el mismo resultado que el anterior, pero sólo devuelve el primer elemento 
// que cumple la condicion.

let resultado2 = carrito.find ( producto=>producto.nmbre === `Tablet`);
console.log(resultado);

// version carrito 2
let resultado3 = ``;
carrito.forEach((producto,index)=>{
    if(producto.nombre===`Tablet`){
        resultado=carrito2[index];
    }
});

// Con el find obtenemos el mismo resultado que el anterior, pero sólo devuelve el primer elemento 
// que cumple la condicion.

let resultado4 = carrito2.find ( producto=>producto.nmbre === `Tablet`);
console.log(resultado);

// Deveria haber cambios acto de fe