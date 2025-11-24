const reproductor = {
//Con parametro
reproducir : id => console.log(`Reproduciendo Cancion ${id}`),
//Sin parametro
pausar:() => {
    console.log('pausando....')
    }
}

reproductor.reproducir(4);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Borrando Cancion ${id}`)
}

reproductor.borrar(30);

const reproductor1 = {
    cancion: ``,
    reproducir: id => console.log(`Reproduciendo Cancion ${id}`),
    pausar:() => {
    console.log('pausando....')
    },
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
        return this.cancion;
    }
};
//reproductor.nuevaCancion= Cancion 1;
//reproductor1.obtenerCancion //Como se trata del metodo get no es necesario el parentests