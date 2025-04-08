import Swal from 'sweetalert2'

(function() {
    let eventos = [];

    // Div para mostrar los eventos
    const resumen = document.querySelector('#registro-resumen')

    // Seleccionar boton de agregar evento
    const eventosBoton = document.querySelectorAll('.evento__agregar');

    eventosBoton.forEach(boton => boton.addEventListener('click', seleccionarEvento));

    function seleccionarEvento(e) {

        if (eventos.length < 5) {
            // Deshabilitar el evento seleccionado
            e.target.disabled = true

            eventos = [...eventos, {
                id: e.target.dataset.id,
                titulo: e.target.parentElement.querySelector('.evento__nombre').textContent.trim()
            }]

            mostrarEventos()
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Máximo 5 eventos por registro',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }


    }

    function mostrarEventos() {
        // Limpiar el HTML
        limpiarEventos()

        if(eventos.length > 0 ) {
            eventos.forEach( evento => {
                // Scripting
                const eventoDOM = document.createElement('DIV')
                eventoDOM.classList.add('registro__evento')

                const titulo = document.createElement('H3')
                titulo.classList.add('registro__nombre')
                titulo.textContent = evento.titulo

                const botonEliminar = document.createElement('BUTTON')
                botonEliminar.classList.add('registro__eliminar')
                botonEliminar.innerHTML = `<i class="fa-solid fa-trash"></i>`
                botonEliminar.onclick = function() {
                    eliminarEvento(evento.id)
                }

                // renderizar en el html
                eventoDOM.appendChild(titulo)
                eventoDOM.appendChild(botonEliminar)
                resumen.appendChild(eventoDOM)
            })
        }
    }

    function eliminarEvento(id) {
        eventos = eventos.filter( evento => evento.id !== id)
        const botonAgregar = document.querySelector(`[data-id="${id}"]`)
        botonAgregar.disabled = false
        mostrarEventos()
    }

    function limpiarEventos() {
        while(resumen.firstChild) {
            resumen.removeChild(resumen.firstChild);
        }
    }
})();