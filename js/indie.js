document.addEventListener("DOMContentLoaded", function () {
    const btnMostrarIndie = document.getElementById("btnMostrarIndie");
    const indieGamesContainer = document.getElementById("indieGamesContainer");
  
    btnMostrarIndie.addEventListener("click", function () {
      fetch("./inicio.json")
        .then(response => response.json())
        .then(data => {
          const juegosIndie = data.filter(function (juego) {
            return juego.compania.toLowerCase() === "indie";
          });
  
          // Limpia el contenido actual del container
          indieGamesContainer.innerHTML = "";
  
          // Crea y agrega dinámicamente los elementos de juego Indie al container
          juegosIndie.forEach(function (juego, index) {
            const juegoElement = document.createElement("div");
            juegoElement.classList.add("col-12", "col-md-4", "col-lg-4", "contenedor");
  
            const imagenElement = document.createElement("img");
            imagenElement.classList.add("tamañoImagen", "element");
            imagenElement.src = "../img/imgJuegos/" + juego.imagen;
            juegoElement.appendChild(imagenElement);
  
            const nombreElement = document.createElement("h3");
            nombreElement.classList.add("letraEspecial");
            nombreElement.textContent = juego.nombre;
            juegoElement.appendChild(nombreElement);
  
            indieGamesContainer.appendChild(juegoElement);
  
            // Agrega un salto de línea cada tres elementos para presentar en filas
            if ((index + 1) % 3 === 0) {
              indieGamesContainer.appendChild(document.createElement("br"));
            }
          });
  
          // Muestra el collapse
          indieGamesContainer.parentElement.style.display = "block";
        })
        .catch(error => console.error("Error al cargar el archivo JSON:", error));
    });
  });
  
   