const sym = Symbol('Symbol1');
const sym2 = Symbol('Symbol1');

let nombre = Symbol();
let apellido = Symbol();

let persona = {}

persona.datos;

persona[nombre] = 'Juan';
persona[apellido] = 'De la torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;
console.log(persona);
console.log(persona[nombre]);

for(let i in persona){
    console.log(`${i}: ${persona[i]}`);
}

