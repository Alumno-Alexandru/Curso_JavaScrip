const navegacion = document.querySelector('.navegacion');

navegacion.addEventListener('click', ()=>{
    console.log('click en nav');
});

navegacion.addEventListener('mouseenter', ()=>{
    console.log('Esta en la zona navegacion');
    navegacion.style.backgroundColor = 'red';
});

navegacion.addEventListener('mouseout', ()=>{
    console.log('Esta en la zona navegacion');
    navegacion.style.backgroundColor = 'transparent';
});

navegacion.addEventListener('mouseup', ()=>{
    console.log('Has saltado');
});

navegacion.addEventListener('dblclick', ()=>{
    console.log('has hecho doble click');
});
