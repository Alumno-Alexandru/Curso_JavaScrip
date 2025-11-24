const cargarTxtBtn=document.querySelector('#cargarJSONObjto');
cargarJSONObjto.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
    .then(resu => resu.json())
    .then(resultado => mostrarHTML(resultado));
}


function mostrarHTML({empresa, nombre, id, trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML= `
    <p>Nombre: ${nombre}</p>
    <p>id: ${id}</p>
    <p>trabajo: ${trabajo}</p>
    <p>Empresa: ${empresa}</p>`
}