const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre", "Octubre"];
const meses3 = ["Noviembre", "Diciembre"];

// Concatenar arrays
let resultado = meses.concat(meses2);
let resultado1 = meses.concat(meses2,meses3);

console.log(resultado);
console.log(resultado1);

// Spread operador

let resultado3 = [...meses,...meses2];
console.log(resultado3);
let resultado4 = [...meses,...meses2,...meses3];

resultado3=[...meses,...meses2,...meses3,`Nocrembre`];
resultado4=[...meses,...meses2,...meses3,...`Juliosto`];
console.log(resultado4);