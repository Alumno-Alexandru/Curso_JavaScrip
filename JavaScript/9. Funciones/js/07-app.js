const reproductor={
    reproductor:function(id){
        console.log('Reproductor cancion ${id}');
    },
    pausar:function(){
        console.log('pausado...');
    }
}

reproductor.reproductor(30);
reproductor.pausar();

reproductor.borrar=function(id){
    console.log('Borrando cancion ${id}');
}

reproductor.borrar(30);

//como generar una lista para que se autorellene con pul o push

// Array vacío
let playlist = [];

// Simulamos que el usuario añade canciones en diferentes momentos
function agregarCancion(nombre, duracion) {
  playlist.push(nombre);
  playlist.push(duracion);
  console.log("Playlist actualizada:", playlist);
}

// Canciones a Agregar

const cancion = {
  titulo: "Shape of You",
  duracion: "4:24"
};

const cancion2 = {
  titulo: "Bad Bunny",
  duracion: "6:30"
};

const cancion3 = {
  titulo: "Funck",
  duracion: "10:20"
};


// Simulando que el usuario agrega canciones
agregarCancion(cancion);
agregarCancion(cancion2);
agregarCancion(cancion3);


 // Con un ForEach
let playlist1 = [];

function agregarCancion(cancion) {
  playlist.push(cancion);
}

const canciones = [
  { titulo: "Shape of You", duracion: "4:24" },
  { titulo: "Bad Bunny", duracion: "6:30" },
  { titulo: "Funck", duracion: "10:20" }
];

// Agregar canciones
canciones.forEach(cancion => agregarCancion(cancion));

// Recorrer y mostrar canciones
playlist.forEach((cancion, i) => {
  console.log(`${i + 1}. ${cancion.titulo} - Duración: ${cancion.duracion}`);
});
