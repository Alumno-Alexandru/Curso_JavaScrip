const dinero=300;
const total=500;
const tarjeta=true;

if(dinero >= total){
    console.log('Se puede pagar');
}else if (tarjeta){
    console.log('Puedo par con tatrjeta');
}else{
    console.log(`No pueo pagar`)
}