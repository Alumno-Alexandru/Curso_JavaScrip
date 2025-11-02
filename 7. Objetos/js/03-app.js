const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.nombre);

// Vamos agregar un nueva propiedad sin acceder a la deciaracion del objeto
producto.imagen= "imagen.jpg";

//para borrar una propiedad de un objeto
delete producto.disponible;
console.log(producto);