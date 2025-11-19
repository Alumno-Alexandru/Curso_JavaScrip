
const url='http://localhost:3000/clientes'

export const nuevoCliente=async(cliente)=>{
    console.log(cliente);
    try{
        await fetch(url, {
            method:'POST',
            body:JSON.stringify(cliente),
            headers:{
                'Content.Type':'application/json'
            }
        });
        window.location.href='index.html';
    }catch(error){
        console.log("ERROR");
    }
}

//Obtener los clientes

export const obtenerClientes=async()=>{
    try{
        const resultado = await fetch(url);
        const clientes=await resultado.json();

        return clientes;
    }catch(error){
        console.log(error);
    }
}

//Obtener cliente por id
export const obtenerCliente = async id =>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        console.log(cliente);
        return cliente;
    }catch(error){
        console.log(error);
    }
}

//Editar cliente
export const editarCliente = async cliente=>{
    try{
        await fetch(`${url}/${cliente.id}`,{
            method:'PUT',
            body:JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'
            }
        });

         window.location.href='index.html';
    } catch (error){
        console.log(error);
    }
}

//Eliminar cliente

export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

