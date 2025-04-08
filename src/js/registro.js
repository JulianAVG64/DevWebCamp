(function() {
    let eventos = [];

    // Seleccionar boton de agregar evento
    const eventosBoton = document.querySelectorAll('.evento__agregar');

    eventosBoton.forEach(boton => boton.addEventListener('click', seleccionarEvento));

    function seleccionarEvento(e) {

        // Deshabilitar el evento seleccionado
        e.target.disabled = true

        eventos = [...eventos, {
            id: e.target.dataset.id,
            titulo: e.target.parentElement.querySelector('.evento__nombre').textContent.trim()
        }]
    }
})();