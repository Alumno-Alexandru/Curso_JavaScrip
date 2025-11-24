const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    unidades: 4
}

const profesores = {
    nombre: "Fernando Ortiz",
    modulo: "DWES" ,
    horas: 9
}

console.log(producto.nombre);

//Forma anterior a ecmascript 6
// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring me crea una constante llamada nombre y le asigna el valor de la propiedad nombre
const {nombre} = producto;
const {precio} = producto;
const {disponible, unidades} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(unidades);