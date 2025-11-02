function Sumar(a,b){
    console.log(a+b);
}

Sumar(2,3);

function saludar(nombre, apellido){
    console.log('Hola ${nombre} ${apellido}');
}

saludar("Enrique", "Galindo");

function saludar2(nombre='Desconocido', apellido='No tiene apellidos'){
    console.log('Hola ${nombre} ${apellido}');
}

saludar2("Pedro");
saludar2(undefined,"Galindo");