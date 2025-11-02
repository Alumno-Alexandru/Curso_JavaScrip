
for(let i=0; i<10; i++){
    if(i === 5){
        console.log('Esto es 5')
        break;
    }
    console.log(`Numero:${i}`);
}

console.log("Continua por aki")

for(let i=0; i<10; i++){
    if(i === 5){
        console.log('Esto es 5')
        continue;
    }
    console.log(`Numero:${i}`);
}

const carrito=[
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Television', precio:100,descuento:True},
    {nombre:'Tablet', precio:200}
]

for(let i=0; i<carrito.length;i++){
    if (carrito[i].descuento){
        console.log(`El arcticulo ${carrito[i].nombre}`)
    }
    console.log(carrito[i].nombre)
}