const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    unidades: 4,
    informacion: {
        garantia: "1 año",
        seguro: 60,
        medidas:{
            peso: "6kg",
            alto: "30cm"
        },
        fabricacion:{
            pais: 'China',
            year: '2021'
        }
    }
}

// 1 const {nombre, informacion:{fabricacion}} = producto; // No se crea la variable fabricacion
// console.log(nombre);
// 2 const {nombre, informacion, informacion:{fabricacion:{pais}}} = producto; // Se crea la variable fabricacion
// console.log(nombre);
// console.log(fabricacion);
// console.log(informacion);

// 3 const {nombre, informacion, informacion:{fabricacion:{pais}}} = producto; // no se crea la variable fabricacion
// console.log(pais);
// 3 La variable fabricancion ya no existira
// 3 console.log(fabricacion);

const {nombre, informacion, informacion:{fabricacion, fabricacion:{pais}}} = producto; 
console.log(fabricacion);
