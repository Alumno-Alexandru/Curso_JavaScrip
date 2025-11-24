const pendientes=['Limpiar la cocina', 'Estudiar JavaScript', 'Hacer la cama', 'Ducharse'];

for(let pendiente in pendientes){
    console.log(pendiente)
}

const automovil={
    modelo:'toyota',
    year:'2022',
    motor:'1.8'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}