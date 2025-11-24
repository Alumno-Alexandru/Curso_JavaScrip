const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundcolor = 'green';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');

card.classList.add('nueva-clase');

// card.classList.add('nueva-clase', 'segunda-clase');

card.classList.remove('card');

console.log(card);