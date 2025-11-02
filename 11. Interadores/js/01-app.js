for(let i=0; i<10; i++){
    console.log(`Numeros: ${i}`)
}

for(let i=0; i<10; i+=2){
    console.log(`Numeros: ${i}`)
}

for(let i=0; i<10; i++){
    if(i%2==0){
        console.log(`Numero: ${i} es par`)
    }else{
        console.log(`Numero: ${i} es impar`)
    }
}

const carrito=[
    {nombre:'Monitor de 27 pulgadas', precio:500},
    {nombre:'Television', precio:100},
    {nombre:'Tablet', precio:200}
]

for(let i=0; i<carrito.length;i++){
    console.log(`Numero:${i}`);
}
