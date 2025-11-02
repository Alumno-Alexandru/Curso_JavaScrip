const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet", 200);
console.log(producto2);
const producto3 = new Producto("Portatil de 16 pulgadas", 400);
console.log(producto3);