const myArray=[1,2,3,4,true,{}]
const my_Array:number[]=[1,2,3,4]
//myarray.push("Hola") //Error
//my_Array.push(true) //Error

const myArray2=my_Array;
myArray2.push(2);
console.log(my_Array);

// Para crear una variable que no sea una referencia
const my_Array3=[...my_Array];

const myArray1:(number|string)[]=[1,2,3,"pablo",8];

