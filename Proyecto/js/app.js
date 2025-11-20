// Selectores
const btnNuevaOrden = document.querySelector('#btn-nueva-orden');
const modal = document.querySelector('#formulario');
const inputMesa = document.querySelector('#mesa');
const inputHora = document.querySelector('#hora');
const platillosSection = document.querySelector('#platillos');
const resumenSection = document.querySelector('#resumen');
const propinasSection = document.querySelector('#propinas');

let platillosData = [];
let ordenActual = { mesa: '', hora: '', items: [], propina: 0 };
let historialMesas = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarDatos();
    btnNuevaOrden.addEventListener('click', () => modal.classList.add('activo'));
    document.querySelector('.modal-overlay').addEventListener('click', cerrarModal);
    document.querySelector('#btn-cerrar-modal').addEventListener('click', cerrarModal);
    document.querySelector('#btn-cancelar').addEventListener('click', cerrarModal);
    document.querySelector('#guardar-cliente').addEventListener('click', guardarCliente);
    document.addEventListener('keydown', (e) => e.key === 'Escape' && cerrarModal());
});

async function cargarDatos() {
    try {
        const datos = await fetch('./db.json').then(r => r.json());
        platillosData = datos.platillos || datos;
    } catch (error) {
        alert('Error al cargar los platillos. Verifica que db.json existe.');
    }
}

function cerrarModal() {
    modal.classList.remove('activo');
    inputMesa.value = '';
    inputHora.value = '';
}

function guardarCliente() {
    const mesa = inputMesa.value;
    const hora = inputHora.value;
    
    if (!mesa || !hora) {
        alert('Todos los campos son obligatorios');
        return;
    }
    if (mesa < 1 || mesa > 8) {
        alert('Mesa no válida. Debe ser entre 1 y 8');
        return;
    }
    
    // Guardar orden anterior si existe
    if (ordenActual.mesa) {
        historialMesas.push({ ...ordenActual });
        console.log('Orden guardada - Mesa ' + ordenActual.mesa + ':', ordenActual);
    }
    
    // Nueva orden
    ordenActual = { mesa, hora, items: [], propina: 0 };
    console.log('Nueva mesa creada - Mesa ' + mesa);
    console.log('Historial de mesas:', historialMesas);
    
    platillosSection.classList.remove('oculto');
    resumenSection.classList.remove('oculto');
    propinasSection.classList.remove('oculto');
    cerrarModal();
    
    mostrarPlatillos(platillosData);
    mostrarResumen();
}

function mostrarPlatillos(platillos) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor-platillos');
    
    platillos.forEach(platillo => {
        const card = document.createElement('div');
        card.classList.add('platillo-card');
        card.innerHTML = `
            <div>
                <h3>${platillo.nombre}</h3>
                <p><strong>Categoría:</strong> ${platillo.categoria}</p>
                <p><strong>Precio:</strong> €${platillo.precio}</p>
            </div>
            <button class="btn-agregar" data-id="${platillo.id}">Agregar</button>
        `;
        contenedor.appendChild(card);
    });
    
    platillosSection.querySelector('.contenido').innerHTML = '';
    platillosSection.querySelector('.contenido').appendChild(contenedor);
    
    document.querySelectorAll('.btn-agregar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const platillo = platillosData.find(p => p.id === id);
            
            if (platillo) {
                const existe = ordenActual.items.find(item => item.id === id);
                if (existe) {
                    existe.cantidad++;
                } else {
                    ordenActual.items.push({ ...platillo, cantidad: 1 });
                }
                mostrarResumen();
            }
        });
    });
}

function calcularTotal() {
    return ordenActual.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
}

function mostrarResumen() {
    const contenedorResumen = resumenSection.querySelector('.contenido');
    contenedorResumen.innerHTML = '';
    
    if (ordenActual.items.length === 0) {
        contenedorResumen.innerHTML = '<p class="texto-centro">Añade los elementos del pedido</p>';
        actualizarPropinas();
        return;
    }
    
    const tabla = document.createElement('div');
    tabla.classList.add('tabla-resumen');
    
    tabla.innerHTML = `
        <div class="resumen-encabezado">
            <div class="col-nombre">Platillo</div>
            <div class="col-precio">Precio</div>
            <div class="col-cantidad">Cantidad</div>
            <div class="col-subtotal">Subtotal</div>
            <div class="col-acciones">Acciones</div>
        </div>
    `;
    
    let total = 0;
    ordenActual.items.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        const fila = document.createElement('div');
        fila.classList.add('resumen-item');
        fila.innerHTML = `
            <div class="col-nombre">${item.nombre}</div>
            <div class="col-precio">€${item.precio.toFixed(2)}</div>
            <div class="col-cantidad">
                <input type="number" min="1" value="${item.cantidad}" class="input-cantidad" data-index="${index}">
            </div>
            <div class="col-subtotal">€${subtotal.toFixed(2)}</div>
            <div class="col-acciones">
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            </div>
        `;
        tabla.appendChild(fila);
    });
    
    contenedorResumen.appendChild(tabla);
    
    const divTotal = document.createElement('div');
    divTotal.classList.add('resumen-total');
    divTotal.innerHTML = `<strong>Total: €${total.toFixed(2)}</strong>`;
    contenedorResumen.appendChild(divTotal);
    
    document.querySelectorAll('.input-cantidad').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = parseInt(e.target.dataset.index);
            const cantidad = parseInt(e.target.value);
            if (cantidad > 0) {
                ordenActual.items[index].cantidad = cantidad;
                mostrarResumen();
            } else {
                e.target.value = ordenActual.items[index].cantidad;
            }
        });
    });
    
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            ordenActual.items.splice(index, 1);
            mostrarResumen();
        });
    });
    
    actualizarPropinas();
}

function actualizarPropinas() {
    const total = calcularTotal();
    const propina = ordenActual.propina;
    const totalConPropina = total + propina;
    
    document.getElementById('total-consumo').textContent = `€${total.toFixed(2)}`;
    document.getElementById('monto-propina').textContent = `€${propina.toFixed(2)}`;
    document.getElementById('total-con-propina').textContent = `€${totalConPropina.toFixed(2)}`;
}

// Propinas
document.addEventListener('DOMContentLoaded', () => {
    const botonesPropina = document.querySelectorAll('.btn-propina');
    const inputPropina = document.querySelector('#propina-custom');
    
    botonesPropina.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botonesPropina.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            ordenActual.propina = (calcularTotal() * parseFloat(e.target.dataset.porcentaje)) / 100;
            inputPropina.value = '';
            actualizarPropinas();
        });
    });
    
    inputPropina.addEventListener('input', (e) => {
        botonesPropina.forEach(b => b.classList.remove('activo'));
        ordenActual.propina = parseFloat(e.target.value) || 0;
        actualizarPropinas();
    });
});

// Función para mostrar todas las mesas en consola
function mostrarTodasLasMesas() {
    console.log('=== RESUMEN DE TODAS LAS MESAS ===');
    historialMesas.forEach((mesa, index) => {
        console.log(`Mesa ${index + 1}:`, mesa);
    });
    if (ordenActual.mesa) {
        console.log('Mesa actual (sin guardar):', ordenActual);
    }
    console.log('Mesas totales:', historialMesas.length);
}