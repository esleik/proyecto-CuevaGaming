var movida = false; // Variable de estado

        function moverFlecha() {
            var Flecha = document.getElementById('mostrarTexto');
            var Sobrenosotros = document.querySelector('.sobrenosotros');
            var Creadopor = document.querySelector('.creadopor');
            var posicionFlecha = parseFloat(getComputedStyle(Flecha).top);
            var posicionSobrenosotros = parseFloat(getComputedStyle(Sobrenosotros).top);
            var posicionCreadopor = parseFloat(getComputedStyle(Creadopor).top);

            if (movida) {
                // Si la flecha ya se movió, vuelve a su posición original
                Flecha.style.top = '59%';
                Sobrenosotros.style.top = '47%';
                Creadopor.style.top = '53%';
            } else {
                // Si no se ha movido, se mueve hacia arriba
                var posicionFlecha2 = posicionFlecha - 155;
                var posicionSobrenosotros2 = posicionSobrenosotros - 155;
                var posicionCreadopor2 = posicionCreadopor - 155;
                Flecha.style.top = posicionFlecha2 + 'px';
                Sobrenosotros.style.top = posicionSobrenosotros2 + 'px';
                Creadopor.style.top = posicionCreadopor2 + 'px';
            }

            // Cambiamos el estado
            movida = !movida;
        }