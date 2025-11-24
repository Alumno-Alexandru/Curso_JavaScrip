
const numero3 = 20;
const numero1 = 20;
const numero2 = "20";

console.log(numero1 == numero3); // falso
console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false

console.log(numero1 === parseInt(numero2)); // true

// Diferente
const password1 = "admin";
const password2 = "Admin";
console.log(password1 != password2); // true

console.log(numero1 != numero2); // false

console.log(numero1 !== numero2); // true

