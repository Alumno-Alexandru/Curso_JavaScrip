const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

console.log(typeof numero1);
console.log(Number.parseInt (numero1));
console.log(Number.parseInt (numero2)); // LA CONVIERTE A ENTERO
console.log(Number.parseFloat (numero2)); // LA CONVIERTE A FLOAT
console.log(Number.parseInt (numero3)); // Devuelve NaN (Not a Number), NO ES UN NUMERO

//REVISA SI UN NUMERO ES UN ENTERO O NO

console.log(Number.isInteger(numero4)); // Devuelve true
console.log(Number.isInteger(numero3)); // Devuelve false

console.log(Number.parseFloat(numero2).toFixed(2)); // Formato a 2 digitos
