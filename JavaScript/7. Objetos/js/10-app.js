const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m",
}

const resultado = Object.assign(producto, medidas); 
console.log(resultado);
//Spread operator o rest operator
//Se utiliza mucho en los framekorks de JS
const resultado2 = {...producto, ...medidas};
console.log(resultado2);