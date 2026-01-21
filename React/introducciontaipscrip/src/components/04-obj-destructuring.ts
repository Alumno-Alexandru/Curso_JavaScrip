interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const persona {
    name1:'Pablo';
    age:30;
    key:'Ironman'
}

const UserContext=({key,name,age,rank}:Hero)=>{
    return{
        keyName:key,
        user:{
            name,
            age,
        },
        rank: rank
    }
}

const context=UserContext(persona)
const {rank, keyName, user}=UserContext(persona)