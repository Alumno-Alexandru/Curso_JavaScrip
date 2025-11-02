function IniciarApp(){
    console.log("Iniciando App.....");

    SegundaFuncion();
}

IniciarApp();

function SegundaFuncion(){
    console.log("Desde la segunda funcion");
    UsuarioAutenticado('Angela');
}

function UsuarioAutenticado(nombre){
    console.log('Autenticado usuario.... espere...');
    console.log('Usuario $(nombre) autenticado exitosamente. Bienvenido');
}