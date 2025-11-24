// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {

    // Cuando usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        // Cargar tweets desde localStorage (si no hay, array vacío)
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    const tweet = document.querySelector('#tweet').value.trim();

    // Validación
    if (tweet === '') {
        mostrarError('El mensaje no puede ir vacío');
        return;
    }

    // Añadir el texto directamente al array
    tweets.push(tweet);

    crearHTML();
    formulario.reset();
}

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => mensajeError.remove(), 3000);
}

// Muestra el listado de tweets
function crearHTML() {
    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach(texto => {
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';
            btnEliminar.style.color = 'red';
            btnEliminar.style.cursor = 'pointer';
            btnEliminar.style.marginLeft = '10px';

            // Añadir función eliminar
            btnEliminar.onclick = () => borrarTweet(texto);

            // Crear el elemento del tweet
            const li = document.createElement('li');
            li.textContent = texto;
            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Guardar en localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar tweet
function borrarTweet(texto) {
    tweets = tweets.filter(t => t !== texto);
    crearHTML();
}

// Limpiar HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
