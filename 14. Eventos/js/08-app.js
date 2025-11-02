const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '80€ por persona ';
parrafo3.classList.add('precio');

parrafo3.onclick = function() {
    nuevaFuncion(3)
}
parrafo2.onclick = function() {
    nuevaFuncion(2)
}
parrafo1.onclick = function() {
    nuevaFuncion(1)
}

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

const contenedorCard = document.createElement('div');
contenedorCard.classList.add('card');

contenedorCard.appendChild(imagen);
contenedorCard.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard);

function nuevaFuncion(id) {
    console.log('click en nuevo parrafo', id);
}