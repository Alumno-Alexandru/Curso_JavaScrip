
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Las propiedades de un objeto declarado como const se puede cambiar, cosa no sucede si es una variable

producto.disponible = false;

let estudiante = {
    nombre: "Juan",
    apellidos: "Perez Gonzalez",
    edad: 30,
    estado: "soltero",
}

console.log(estudiante.apellidos);

//En los objetos podemos tener un posible conflicto, por ejemplo

delete producto.precio; //Esta instruccion borraria el precio del objeto


