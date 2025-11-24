const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando se carga el documento, mostrar carrito desde localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    // AGREGA OBJETOS AL CARRITO
    listaCursos.addEventListener('click', agregarCurso);
    
    // ELIMINA OBJETOS DEL CARRITO
    carrito.addEventListener('click', eliminarCurso);
    
    // ELIMINA TODO EL CARRITO
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
        sincronizarStorage();
    });
}

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log(e.target);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== id);
        carritoHTML();
        sincronizarStorage(); // Guardar en localStorage
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: parseFloat(curso.querySelector('.precio span').textContent),
        id: parseInt(curso.querySelector('a').getAttribute('data-id')),
        cantidad: 1
    }
    
    const existe = articulosCarrito.some(c => c.id === infoCurso.id);
    
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    
    console.log(articulosCarrito);
    carritoHTML();
    sincronizarStorage(); // Guardar en localStorage
}

function carritoHTML() {
    limpiarHTML();
    
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const { imagen, titulo, precio, cantidad, id } = curso;
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// NUEVA FUNCIÓN: Sincronizar con localStorage
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}