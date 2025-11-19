// Selectores
const btnNuevaOrden = document.querySelector('#btn-nueva-orden');
const modal = document.querySelector('#formulario');
const btnCerrarModal = document.querySelector('#btn-cerrar-modal');
const btnCancelar = document.querySelector('#btn-cancelar');
const btnGuardarCliente = document.querySelector('#guardar-cliente');
const modalOverlay = document.querySelector('.modal-overlay');
const inputMesa = document.querySelector('#mesa');
const inputHora = document.querySelector('#hora');
const platillosSection = document.querySelector('#platillos');
const resumenSection = document.querySelector('#resumen');
const propinasSection = document.querySelector('#propinas');

// Variable global para almacenar los datos
let platillosData = [];
let ordenActual = {
    mesa: '',
    hora: '',
    items: [],
    propina: 0
};

// Event Listeners
document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    // Cargar datos del JSON
    cargarDatos();
    
    // Abrir modal
    btnNuevaOrden.addEventListener('click', abrirModal);
    
    // Cerrar modal
    btnCerrarModal.addEventListener('click', cerrarModal);
    btnCancelar.addEventListener('click', cerrarModal);
    modalOverlay.addEventListener('click', cerrarModal);
    
    // Guardar cliente
    btnGuardarCliente.addEventListener('click', guardarCliente);
}

// Función para cargar datos desde db.json
async function cargarDatos() {
    try {
        const response = await fetch('./db.json');
        
        if (!response.ok) {
            throw new Error('Error al cargar los datos');
        }
        
        const datos = await response.json();
        platillosData = datos.platillos || datos;
        
        console.log('Datos cargados:', platillosData);
        
        // Aquí puedes llamar a una función para mostrar los platillos
        // mostrarPlatillos(platillosData);
        
    } catch (error) {
        console.error('Error:', error);
        alert('No se pudieron cargar los platillos. Verifica que db.json existe.');
    }
}

// Funciones
function abrirModal() {
    modal.classList.add('activo');
}

function cerrarModal() {
    modal.classList.remove('activo');
    // Limpiar formulario
    inputMesa.value = '';
    inputHora.value = '';
}

function guardarCliente() {
    const mesa = inputMesa.value;
    const hora = inputHora.value;
    
    // Validar
    if(mesa === '' || hora === '') {
        alert('Todos los campos son obligatorios');
        return;
    }
    
    // Validar número de mesa
    if(mesa < 1 || mesa > 8) {
        alert('Mesa no válida. Debe ser entre 1 y 8');
        return;
    }
    
    // Guardar datos de la orden
    ordenActual.mesa = mesa;
    ordenActual.hora = hora;
    ordenActual.items = [];
    
    console.log('Mesa:', mesa);
    console.log('Hora:', hora);
    
    // Mostrar secciones
    platillosSection.classList.remove('oculto');
    resumenSection.classList.remove('oculto');
    propinasSection.classList.remove('oculto');
    
    // Cerrar modal
    cerrarModal();
    
    // Mostrar platillos disponibles
    if(platillosData.length > 0) {
        mostrarPlatillos(platillosData);
        mostrarResumen();
    }
}

// Función para mostrar los platillos en el DOM
function mostrarPlatillos(platillos) {
    const contenedorPrincipal = platillosSection.querySelector('.contenido');
    contenedorPrincipal.innerHTML = '';
    
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
    
    contenedorPrincipal.appendChild(contenedor);
    
    // Agregar event listeners a los botones
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', agregarPlatillo);
    });
}

// Función para agregar platillo a la orden
function agregarPlatillo(e) {
    const id = parseInt(e.target.dataset.id);
    const platillo = platillosData.find(p => p.id === id);
    
    if(platillo) {
        // Verificar si el platillo ya está en la orden
        const itemExistente = ordenActual.items.find(item => item.id === id);
        
        if(itemExistente) {
            // Si ya existe, aumentar la cantidad
            itemExistente.cantidad += 1;
        } else {
            // Si no existe, agregarlo a la orden
            ordenActual.items.push({
                id: platillo.id,
                nombre: platillo.nombre,
                precio: platillo.precio,
                cantidad: 1
            });
        }
        
        console.log('Platillo agregado:', platillo);
        console.log('Orden actual:', ordenActual);
        
        // Actualizar el resumen
        mostrarResumen();
    }
}

// Función para mostrar el resumen de la orden
function mostrarResumen() {
    const contenedorResumen = resumenSection.querySelector('.contenido');
    contenedorResumen.innerHTML = '';
    
    if(ordenActual.items.length === 0) {
        contenedorResumen.innerHTML = '<p class="texto-centro">Añade los elementos del pedido</p>';
        return;
    }
    
    // Crear tabla de resumen
    const tabla = document.createElement('div');
    tabla.classList.add('tabla-resumen');
    
    // Encabezados
    const encabezado = document.createElement('div');
    encabezado.classList.add('resumen-encabezado');
    encabezado.innerHTML = `
        <div class="col-nombre">Platillo</div>
        <div class="col-precio">Precio</div>
        <div class="col-cantidad">Cantidad</div>
        <div class="col-subtotal">Subtotal</div>
        <div class="col-acciones">Acciones</div>
    `;
    tabla.appendChild(encabezado);
    
    // Items
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
    
    // Total
    const divTotal = document.createElement('div');
    divTotal.classList.add('resumen-total');
    divTotal.innerHTML = `<strong>Total: €${total.toFixed(2)}</strong>`;
    contenedorResumen.appendChild(divTotal);
    
    // Event listeners para cambiar cantidad
    const inputsCantidad = document.querySelectorAll('.input-cantidad');
    inputsCantidad.forEach(input => {
        input.addEventListener('change', cambiarCantidad);
    });
    
    // Event listeners para eliminar
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', eliminarItem);
    });
    
    // Inicializar propinas
    inicializarPropinas();
    actualizarPropinasTrabajadores();
}

// Función para cambiar la cantidad de un item
function cambiarCantidad(e) {
    const index = parseInt(e.target.dataset.index);
    const nuevaCantidad = parseInt(e.target.value);
    
    if(nuevaCantidad > 0) {
        ordenActual.items[index].cantidad = nuevaCantidad;
        mostrarResumen();
    } else {
        e.target.value = ordenActual.items[index].cantidad;
    }
}

// Función para eliminar un item del resumen
function eliminarItem(e) {
    const index = parseInt(e.target.dataset.index);
    ordenActual.items.splice(index, 1);
    mostrarResumen();
}

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('activo')) {
        cerrarModal();
    }
});

// ============================================
// FUNCIONES PARA PROPINAS
// ============================================

// Inicializar event listeners de propinas
function inicializarPropinas() {
    const botonesPropina = document.querySelectorAll('.btn-propina');
    const inputPropina = document.querySelector('#propina-custom');
    
    botonesPropina.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botonesPropina.forEach(b => b.classList.remove('activo'));
            e.target.classList.add('activo');
            
            const porcentaje = parseFloat(e.target.dataset.porcentaje);
            const total = calcularTotal();
            const propina = (total * porcentaje) / 100;
            
            ordenActual.propina = propina;
            inputPropina.value = '';
            actualizarPropinasTrabajadores();
        });
    });
    
    inputPropina.addEventListener('change', (e) => {
        botonesPropina.forEach(b => b.classList.remove('activo'));
        const propina = parseFloat(e.target.value) || 0;
        ordenActual.propina = propina;
        actualizarPropinasTrabajadores();
    });
    
    inputPropina.addEventListener('input', (e) => {
        const propina = parseFloat(e.target.value) || 0;
        ordenActual.propina = propina;
        actualizarPropinasTrabajadores();
    });
}

// Calcular el total del consumo
function calcularTotal() {
    return ordenActual.items.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
    }, 0);
}

// Actualizar el resumen de propinas
function actualizarPropinasTrabajadores() {
    const total = calcularTotal();
    const propina = ordenActual.propina;
    const totalConPropina = total + propina;
    
    // Actualizar resumen
    document.getElementById('total-consumo').textContent = `€${total.toFixed(2)}`;
    document.getElementById('monto-propina').textContent = `€${propina.toFixed(2)}`;
    document.getElementById('total-con-propina').textContent = `€${totalConPropina.toFixed(2)}`;
}

