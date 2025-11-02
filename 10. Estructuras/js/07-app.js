const autenticado= true;
const puedePagar= true;

console.log(autenticado? 'Si esta autenticado': 'No esta autenticado');
console.log(autenticado && puedePagar ? 'Paga': 'No paga');

console.log(autenticado ? puedePagar ? 'si puede': 'No puede': 'If anidado');