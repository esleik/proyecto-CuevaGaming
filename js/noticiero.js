function cerrarModal() {
    document.getElementById('modalTrucos').style.display = 'none';
}

// Esta función toma el índice del truco en el array como argumento
function abrirModal(truco) {
    document.getElementById('tituloTruco').innerText = truco.nombre;
    document.getElementById('descripcionTruco').innerText = truco.truco1;  // Puedes mostrar más información según tu estructura de datos
    document.getElementById('videoTruco').src = truco.video;
    document.getElementById('modalTrucos').style.display = 'block';
}

// Esta función toma el índice del truco en el array como argumento
function actualizarEventListenersModal() {
    const trucosElementos = document.querySelectorAll('.trucos-contenedor');
    trucosElementos.forEach((element, index) => {
        element.addEventListener('click', function () {
            const truco = window.trucos[index];
            abrirModal(truco);
        });
    });
}

// Llama a esta función cuando se cargue el JSON
function cargarTrucos() {
    // Puedes ajustar la ruta al archivo JSON según tu estructura de carpetas
    fetch('ruta/al/archivo/trucos.json')
        .then(response => response.json())
        .then(data => {
            window.trucos = data;
            actualizarEventListenersModal();
        })
        .catch(error => console.error('Error cargando el archivo JSON', error));
}

// Llama a cargarTrucos cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarTrucos);
