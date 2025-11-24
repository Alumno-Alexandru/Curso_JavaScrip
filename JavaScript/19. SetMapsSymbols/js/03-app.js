let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

console.log(cliente.size);

console.log(cliente.has('tipo'));
console.log(cliente.get('tipo'));

cliente.delete('nombre');
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.size);

client.clear();
console.log(cliente);

const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('nombre', ' Antonio');

console.log(paciente);

cliente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`); 
});
