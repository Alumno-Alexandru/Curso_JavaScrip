interface Person{
    firstname: string;
    lastName: string;
    age: number;
    direction: Address;
}

interface Address{
    postalCode: string;
    city: string;
}

const ironman:Person={
    firstname: "Tony",
    lastName: "Stark",
    age: 40,
    direction: {
        postalCode: "10017",
        city: "New York"
    }
}

const profesor:Person={
    firstname: "",
    lastName: "",
    age: 0,
}

let a:number;