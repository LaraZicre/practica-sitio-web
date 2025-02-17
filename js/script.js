document.addEventListener("DOMContentLoaded", function() {
    // Función para configurar la paginación de cada revista
    function setupPagination(revistaId, paginacionId) {
        const revista = document.getElementById(revistaId);
        const paginas = revista.querySelectorAll('.pagina');
        const paginacion = document.getElementById(paginacionId);
        const botones = paginacion.querySelectorAll('.page-item');
        let paginaActual = 0;

        // Función para mostrar una página específica
        function mostrarPagina(index) {
            paginas.forEach((pagina, i) => {
                if (i === index) {
                    pagina.style.display = 'block';
                } else {
                    pagina.style.display = 'none';
                }
            });

            botones.forEach(btn => btn.classList.remove('active'));
            botones[index + 1].classList.add('active');
        }

        // Configurar eventos de click para los botones
        botones.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (btn.classList.contains('prev') && paginaActual > 0) {
                    paginaActual--;
                } else if (btn.classList.contains('next') && paginaActual < paginas.length - 1) {
                    paginaActual++;
                } else if (!btn.classList.contains('prev') && !btn.classList.contains('next')) {
                    paginaActual = index - 1;
                }
                mostrarPagina(paginaActual);
            });
        });

        // Mostrar la primera página al cargar
        mostrarPagina(0);
    }

    // Configurar paginación para cada revista
    setupPagination('revista1', 'paginacion1');
    setupPagination('revista2', 'paginacion2');
    setupPagination('revista3', 'paginacion3');
    setupPagination('revista4', 'paginacion4');
    setupPagination('revista5', 'paginacion5');
});
