const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerHTML);
console.log(encabezado.innerText);
console.log(encabezado.textContent);

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;

document.querySelector('.contenido-hero h1').textContent = 'Nuevo HEADING';

const addEncabezado = "NUEVO ENCABEZADO";

document.querySelector('.contenido-hero h1').textContent = addEncabezado;

const imagen = document.querySelector('.card img');
imagen.src='img/hacer2.jpg';
console.log(imagen);