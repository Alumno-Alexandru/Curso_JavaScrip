const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
  console.log(e.target.classList);

    if(e.target.classList.contains('titulo')) {
        console.log('Has clicado en el título');}

    if(e.target.classList.contains('precio')) {
        console.log('Has clicado en el precio');}

    if(e.target.nodeName === 'IMG') {
        console.log('Has clicado en la imagen');}
});