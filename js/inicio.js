document.addEventListener('DOMContentLoaded', function () {
    const juegos = [
        {
            "id": 1,
            "nombre": "Pokemon Escarlata/Purpura DLC",
            "imagen": "pokemonEscarlataDLC.jpg",
            "precio": "57.13",
            "compania": "nintendo",
            "novedad": "si",
            "video": "https://www.youtube.com/embed/N9DE1fJABPo",
            "descripcion": "Pokemon Escarlata/Purpura DLC es un emocionante juego de aventuras de la franquicia Pokémon que te sumerge en un colorido mundo lleno de misterio y desafíos. En esta expansión, los jugadores pueden explorar nuevas regiones, capturar criaturas únicas y embarcarse en emocionantes batallas para convertirse en un auténtico Maestro Pokémon. ¡Prepárate para vivir una aventura inolvidable en el emocionante universo de Pokémon!"
        },
        {
            "id": 2,
            "nombre": "Grand Theft Auto V",
            "imagen": "GTA5.jpg",
            "precio": "0",
            "compania": "PlayStation",
            "novedad": "no"
        },
        {
            "id": 3,
            "nombre": "Spider-Man Miles Morales",
            "imagen": "Spiderman.jpg",
            "precio": "0",
            "compania": "PlayStation",
            "novedad": "si",
            "video": "https://www.youtube.com/embed/Q3kfF3XNzw8",
            "descripcion": "un juego"
        },
        {
            "id": 4,
            "nombre": "The Legend of Zelda: Tears of the Kingdom",
            "imagen": "zelda.jpg",
            "precio": "0",
            "compania": "nintendo",
            "novedad": "si",
            "video":"https://www.youtube.com/embed/gp9aY09li1s",
            "descripcion": "un juego"
        },
        {
            "id": 5,
            "nombre": "Call Of Duty Modern Warfare 2",
            "imagen": "CallOfDuty.jpg",
            "precio": "0",
            "compania": "Xbox",
            "novedad": "no",
            "video":"https://www.youtube.com/embed/ztjfwecrY8E",
            "descripcion": "un juego"
        },
        {
            "id": 6,
            "nombre": "Atomic Heart",
            "imagen": "atomic.jpg",
            "precio": "0",
            "compania": "Xbox",
            "novedad": "no",
            "video":"https://www.youtube.com/embed/_tEgeZrOOHM",
            "descripcion": "un juego"
        },
        {
            "id": 7,
            "nombre": "Far Cry 6",
            "imagen": "FarCry6.jpg",
            "precio": "0",
            "compania": "PlayStation",
            "novedad": "no",
            "video":"https://www.youtube.com/embed/JUgQCnJj-Xc",
            "descripcion": "un juego"
        },
        {
            "id": 8,
            "nombre": "One Piece Odyssey",
            "imagen": "onepieceOdyssey.jpg",
            "precio": "0",
            "compania": "nintendo",
            "novedad": "si",
            "video":"https://www.youtube.com/embed/qEQf7PFQqtc",
            "descripcion": "un juego"
        },
        {
            "id": 9,
            "nombre": "One Piece Odyssey",
            "imagen": "onepieceOdyssey.jpg",
            "precio": "0",
            "compania": "Xbox",
            "novedad": "no",
            "video":"https://www.youtube.com/embed/qEQf7PFQqtc",
            "descripcion": "un juego"
        },
        {
            "id": 10,
            "nombre": "One Piece Odyssey",
            "imagen": "onepieceOdyssey.jpg",
            "precio": "0",
            "compania": "PlayStation",
            "novedad": "no",
            "video":"https://www.youtube.com/embed/qEQf7PFQqtc",
            "descripcion": "un juego"
        },
        {
            "id": 11,
            "nombre": "Hallo Infinite",
            "imagen": "HaloInfinite.jpg",
            "precio": "0",
            "compania": "Xbox",
            "novedad": "si",
            "video":"https://www.youtube.com/embed/QORZtiws6Sk",
            "descripcion": "un juego"
        },
        {
            "id": 12,
            "nombre": "Ark: Survival Ascended",
            "imagen": "arkSurvivalAscended.jpg",
            "precio": "0",
            "compania": "PlayStation",
            "novedad": "si",
            "video":"https://www.youtube.com/embed/0gLODoXanog",
            "descripcion": "un juego"
        }
    ];

    const contenedorJuegos = document.getElementById('contenedor-juegos');
    const selectCategoria = document.getElementById('select-categoria');
    const tituloTodos = document.getElementById('titulo-todos');
    const tituloNintendo = document.getElementById('titulo-nintendo');
    const tituloXbox = document.getElementById('titulo-xbox');
    const tituloPs5 = document.getElementById('titulo-ps5');


    function actualizarEventListenersModal() {
        const juegosElementos = document.querySelectorAll('.contenedor');
        juegosElementos.forEach((element) => {
            element.addEventListener('click', function () {
                const juegoId = element.getAttribute('data-id');
                const juego = juegos.find(j => j.id.toString() === juegoId);
                openModal(juego);
            });
        });
    }

    function mostrarJuegos(categoria) {

        // Oculta todos los títulos
        tituloTodos.style.display = 'none';
        tituloNintendo.style.display = 'none';
        tituloXbox.style.display = 'none';
        tituloPs5.style.display = 'none';

        // Muestra el título correspondiente a la categoría seleccionada
        if (categoria === 'todos') {
            tituloTodos.style.display = 'block';
        } else if (categoria === 'nintendo') {
            tituloNintendo.style.display = 'block';
        } else if (categoria === 'Xbox') {
            tituloXbox.style.display = 'block';
        } else if (categoria === 'PlayStation') {
            tituloPs5.style.display = 'block';
        }

        contenedorJuegos.innerHTML = '';
        let filaActual = null;
        let juegosEnFila = 0; // Contador para controlar la cantidad de juegos en una fila

        juegos.forEach((juego, index) => {
            if (categoria === 'todos') {
                if (juego.novedad === 'si') {
                    if (juegosEnFila === 0) {
                        filaActual = document.createElement('div');
                        filaActual.classList.add('row');
                        contenedorJuegos.appendChild(filaActual);
                    }
    
                    const juegoDiv = document.createElement('div');
                    juegoDiv.classList.add('col-12', 'col-md-3', 'col-lg-4', 'text-center', 'contenedor');
                    juegoDiv.setAttribute('data-id', juego.id); // Agrega el atributo data-id con el ID del juego
    
                    const imagen = document.createElement('img');
                    imagen.src = `../img/imgJuegos/${juego.imagen}`;
                    imagen.className = 'tamañoImagen element';
    
                    const nombre = document.createElement('p');
                    nombre.className = 'letraEspecial text-center';
                    nombre.innerHTML = `<strong>${juego.nombre}</strong>`;
    
                    juegoDiv.appendChild(imagen);
                    juegoDiv.appendChild(nombre);
                    filaActual.appendChild(juegoDiv);
    
                    juegosEnFila++;
    
                    if (juegosEnFila === 3) {
                        juegosEnFila = 0; // Reinicia el contador para crear una nueva fila
                    }
                }
            } else if (categoria === juego.compania) {
                if (juegosEnFila === 0) {
                    filaActual = document.createElement('div');
                    filaActual.classList.add('row');
                    contenedorJuegos.appendChild(filaActual);
                }
    
                const juegoDiv = document.createElement('div');
                juegoDiv.classList.add('col-12', 'col-md-3', 'col-lg-4', 'text-center', 'contenedor');
                juegoDiv.setAttribute('data-id', juego.id); // Agrega el atributo data-id con el ID del juego
    
                const imagen = document.createElement('img');
                imagen.src = `../img/imgJuegos/${juego.imagen}`;
                imagen.className = 'tamañoImagen element';
    
                const nombre = document.createElement('p');
                nombre.className = 'letraEspecial text-center';
                nombre.innerHTML = `<strong>${juego.nombre}</strong>`;
    
                juegoDiv.appendChild(imagen);
                juegoDiv.appendChild(nombre);
                filaActual.appendChild(juegoDiv);
    
                juegosEnFila++;
    
                if (juegosEnFila === 3) {
                    juegosEnFila = 0; // Reinicia el contador para crear una nueva fila
                }
            }
        });
    }

    actualizarEventListenersModal();

    mostrarJuegos('todos');

    selectCategoria.addEventListener('change', function () {
        const categoriaSeleccionada = selectCategoria.value;
        mostrarJuegos(categoriaSeleccionada);
    });

   



    // JavaScript para el modal
    const modal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVideo = document.getElementById('modalVideo');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    function openModal(juego) {
        modalTitle.textContent = juego.nombre;
        modalVideo.innerHTML = `<iframe width="560" height="315" src="${juego.video}" frameborder="0" allowfullscreen></iframe>`;
        modalDescription.textContent = juego.descripcion;
        modalPrice.textContent = `Precio: $${juego.precio}`;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const juegosElementos = document.querySelectorAll('.contenedor');
    juegosElementos.forEach((element) => {
        element.addEventListener('click', function () {
            const juegoId = element.getAttribute('data-id'); 
            const juego = juegos.find(j => j.id.toString() === juegoId);
            openModal(juego); 
        });
    });
    

});






