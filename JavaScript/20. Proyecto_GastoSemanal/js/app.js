// Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Classes

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos.push(gasto);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI{

    insertarPresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;
    }

    mostrarAlerta(mensaje, tipo){
        
        const alerta = document.createElement('div');
        alerta.className = `text-center alert ${tipo === 'error' ? 'alert-danger': 'alert-success'}`;
        alerta.textContent = mensaje;

        document.querySelector('.primario').insertBefore(alerta, formulario);

        setTimeout(() => {alerta.remove()}, 2000);
    }

    mostrarGastos(gastos){
        gastoListado.innerHTML = '';

        gastos.forEach(gasto => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-fex justify-content-between align-items-center';
            li.innerHTML=`${gasto.nombre} 
                <span class="badge badge-primary badge-pill">$ ${gasto.cantidad}</span>
                `;
            
            const btnBorrar = document.createElement('button');
            btnBorrar.className = 'btn btn-danger borrar-gasto';
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => eliminarGasto(gasto.id);
            
            li.appendChild(btnBorrar);
            gastoListado.appendChild(li);
        });
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(preguntarObj){
        const { presupuesto, restante } = preguntarObj;
        const restanteDiv = document.querySelector('.restante');

        restanteDiv.classList.remove('alert-success', 'alert-warning');
        restanteDiv.classList.add('alert-danger');
        
        if (restante < (presupuesto * 0.25)) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if (restante <= (presupuesto * 0.5)) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }

        if( restante <= 0){
            
           this.mostrarAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } else{

            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    } 
}

//Instancia
const ui = new UI();
let presupuesto;

// Funciones para preguntar presupuesto
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿cual es tu presupuesto?');

    if ( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        windows.location.reload();
        return;
    }
    
        presupuesto = new Presupuesto (presupuestoUsuario);
        ui.insertarPresupuesto(presupuesto)
}

// Funciones para agregar gasto

function agregarGasto(e){
    e.preventDefault();

    const nombre = formulario.querySelector('#gasto').value;
    const cantidad = Number(formulario.querySelector('#cantidad').value);

    //Validar campos
    if(nombre === '' || cantidad === ''){
        ui.mostrarAlerta('Por favor llenar ambos campos', 'error');
        return;
    }
    if (cantidad <= 0 || isNaN(cantidad)){
        ui.mostrarAlerta('Ingrese un precio válido.', 'error');
        return;
    }

    // Crear gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    presupuesto.nuevoGasto(gasto);

    // Mostrar alerta
    ui.mostrarAlerta('Gasto agregado correctamente', 'correcto');

    //Actualizar UI
    ui.mostrarGastos(presupuesto.gastos);
    ui.actualizarRestante(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);

    // Resetear formulario 
    formulario.reset();
}

// Función para eliminar gasto
function eliminarGasto(id){
    presupuesto.eliminarGasto(id);
    // Mostrar alerta
    ui.mostrarAlerta('Gasto retirado correctamente', 'correcto');
    // Actualizar UI
    ui.mostrarGastos(presupuesto.gastos);
    ui.actualizarRestante(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);
}

document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
formulario.addEventListener('submit', agregarGasto);
