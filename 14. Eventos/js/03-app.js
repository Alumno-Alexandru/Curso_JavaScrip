const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('Escritura');
// });

// busqueda.addEventListener('keyup', () => {
//     console.log('Escritura');
// });

// busqueda.addEventListener('blur', () => {
//     console.log('Has perdido el foco');
// });


// busqueda.addEventListener('copy', () => {
//     console.log('Para copiar ');
// });

// busqueda.addEventListener('paste', () => {
//     console.log('Para pegar ');
// });

// busqueda.addEventListener('cut', () => {
//     console.log('Para cortar ');
// });

// busqueda.addEventListener('input', () => {
//     console.log('Para pegado ');
// });

busqueda.addEventListener('input', (e) => {
 console.log(e);
 console.log(e.type);

 console.log(e.target);
 console.log(e.target.value);

 if (e.target.value === ''){
    console.log('fallo la validacion')
 }
});