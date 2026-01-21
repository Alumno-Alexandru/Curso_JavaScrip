const Nombres=['Ana','Rosa','Luis'];

const[, ,A]=Nombres;
console.log(A);

const returnsArrayFn=()=>{
    return ['ABC',123] as const;
}

const []=returnsArrayFn();


//Solucion del ejercicio1
const useState=(value:String)=>{
    return [value,(newValue:string)=>{
        console.log(newValue);
    },
    ] as const;
}