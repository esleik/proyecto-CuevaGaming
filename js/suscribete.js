var movida = false; // Variable de estado

        function moverFlecha() {
            var Flecha = document.getElementById('mostrarTexto');
            var Sobrenosotros = document.querySelector('.sobrenosotros');
            var Banderas = document.querySelector('.banderas');

            var posicionFlecha = parseFloat(getComputedStyle(Flecha).top);
            var posicionSobrenosotros = parseFloat(getComputedStyle(Sobrenosotros).top);
            

            if (movida) {
                // Si la flecha ya se movió, vuelve a su posición original
                Flecha.style.top = '59%';
                Sobrenosotros.style.top = '50%';
            } else {
                // Si no se ha movido, se mueve hacia arriba
                var posicionFlecha2 = posicionFlecha - 155;
                var posicionSobrenosotros2 = posicionSobrenosotros - 155;
                Flecha.style.top = posicionFlecha2 + 'px';
                Sobrenosotros.style.top = posicionSobrenosotros2 + 'px';
            }

            // Cambiamos el estado
            movida = !movida;

        
            if (movida) {
                Banderas.style.display = 'block';
            } else {
                Banderas.style.display = 'none';
            }
        }