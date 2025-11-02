const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (e)=> {
//     e.preventDefault();

//     console.log(e.target.method);
//     console.log(e.target.action);
// });

formulario.addEventListener('submit', validadFormulario);

function validadFormulario(e) {
    e.preventDefault();
    console.log(e.target.action);
}