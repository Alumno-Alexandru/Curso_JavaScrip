const producto={
    nombre: "Monitor",
    precio:300,
    disponible: true
}

const {nombre} = producto;
console.log(nombre);

const numero=[10,20,30,40,50];

const [primero] = numero;

console.log(primero)
const [primer,segun,tercer]=numeros;
console.log(segun);
const [, , ,cuarto]=numeros;
console.log(cuarto);
const [,segundo, cuar]=numeros;
console.log(segundo, cuar);

const [pri,seg, ...ter]=numeros;
console.log(ter);
