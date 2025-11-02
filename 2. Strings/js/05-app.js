const producto = 'Monitor 20 pulgadas';
const DNI= '05743256H'

//Reemplazar replace
console.log(producto.replace('pulgadas','"'))

console.log(producto.replace('Monitor', 'Monitor curvo'));

//slice partir

console.log(producto.slice(0,10)); //Devuelve los 10 primeros caracteres 
console.log(producto.slice(8)); //Devuelve desde el caracter 8

//Alternativa a slice

console.log(producto.substring(0,10)); //Devuelve los 10 primeros caracteres

const usuario = "Sebas";
console.log(usuario.charAt(0)); //Devuelve el carracter especifico

// UN EJEMPLO MAS COMPLETO

var cualquierCadena = "Brave new world";

    console.log(
        "El caracter en el indice 0 es '" +cualquierCadena.charAt(0)+ "'",
    );
    console.log(
        "El caracter en el indice 1 es '" +cualquierCadena.charAt(1)+ "'",
    );
    console.log(
        "El caracter en el indice 2 es '" +cualquierCadena.charAt(2)+ "'",
    );
    console.log(
        "El caracter en el indice 3 es '" +cualquierCadena.charAt(3)+ "'",
    );
    console.log(
        "El caracter en el indice 4 es '" +cualquierCadena.charAt(4)+ "'",
    );
    console.log(
        "El caracter en el indice 999 es '" +cualquierCadena.charAt(999)+ "'",
    );

