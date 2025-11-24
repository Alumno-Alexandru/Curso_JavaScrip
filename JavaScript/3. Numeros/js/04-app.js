// ORDEN DE EJECUCION DE LAS OPERACIONES

let resultado;

resultado = 20 + 30 * 2; // Tiene prioridad la multiplicacion
resultado = (20 + 30) * 2; // Primero se ejecuta lo que esta entre parentesis

// 30% de descuento

resultado = (30 + 10 + 15 + 25) * 0.3;
resultado = (30 + 10 + 15 + 25) * 30 / 100;

//APLICAR EL IVA

resultado = (30 + 30) * 1.21;

console.log(resultado);

// 110 + 40 + 2  todo con el 21%

resultado = (110 + 40 + 2) * 1.21;
console.log(resultado);

// 42.000 / 1.21
resultado = 42000 / 1.21;
console.log(resultado);

// 32.000 * 1.21
resultado = 32000 * 1.21;
console.log(resultado); 