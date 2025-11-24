window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;
    
    console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
         if(ubicacion.top < 675){
            console.log("El premium se encuentra visible");
            }else{
            console.log("El premium se encuentra No visible");
            }
})

