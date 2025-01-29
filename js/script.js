const paginas = document.querySelectorAll('.pagina');
let paginaActual = 0;

document.getElementById('next').addEventListener('click', () => {
    if (paginaActual < paginas.length - 1) {
        paginas[paginaActual].style.transform = 'rotateY(-180deg)';
        paginaActual++;
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (paginaActual > 0) {
        paginaActual--;
        paginas[paginaActual].style.transform = 'rotateY(0deg)';
    }
});