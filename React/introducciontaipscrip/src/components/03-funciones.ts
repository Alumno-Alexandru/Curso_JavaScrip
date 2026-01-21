function greet(name: string){
    return `Hello, ${name}`;
}

const greeting = greet("Pablo");

function hola(name: string) : string{
    return `Hola, ${name}`;
}

//const hola2=(name:string):string=>`Hola${name}`
function getUser(){
    return {
        uid: "ABC123",
        username: "Pablo",
    }
}

const getUser2=()=>{
    return {
        uid: "ABC123",
        username: "Corresendas"
    }
}

const getUser3=()=>({uid: "ABC123", username: "Corresendas"})

interface User{
    uid: string;
    username: string;
}

function getUser5():User{
    return {
        uid: "ABC-123",
        username: "Corresendas",
    }
}
