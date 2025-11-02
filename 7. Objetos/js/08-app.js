
"use strict"; //Esto te obliga a que cumpla ciertos reglas por ejemplo no deja x=20 sin declararlo

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
//Como podemos hacer para que un objeto, realmente se comporte como una constante
Object.freeze(producto); 
console.log(Object.isFrozen(producto)); 
producto.imagen = "jpg"; //Devuelve verdadero si el objeto esta congelado
delete producto.precio; //Esto tampoco me va a dejar hacerlo
producto.precio = 100; //tampoco deja hacer esto