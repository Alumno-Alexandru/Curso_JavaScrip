
"use strict"; //Esto te obliga a que cumpla ciertos reglas por ejemplo no deja x=20 sin declararlo

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Con el metodo seal no se puede agregar ni eliminar propiedades
//Solo se puede modificar el contenido del producto

Object.seal(producto); 
producto.disponible = false; 
delete producto.precio;
console.log(Objeto.isSealed(producto));