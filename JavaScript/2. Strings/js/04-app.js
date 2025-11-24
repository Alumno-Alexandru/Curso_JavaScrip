// Eliminar los espacios en blanco al inicio y final de una cadena
// Los espacios en blanco forman parte de la longitud de la cadena

const producto= '    Monitor 20 Pulgadas    ';
console.log(producto.length);

// Eliminar del inicio
console.log(producto.trimStart()); //Elimina los espacios del principio
console.log(producto.trimEnd()); //Elimina los espacios del final

// Una forma de hacer las dos instrucciones en una sola linea
console.log(producto.trimStart().trimEnd());

//Una version antigua
console.log(producto.trim());
