(function(){
    const horas = document.querySelector('#horas')

    if(horas) {

        const categoria = document.querySelector('[name="categoria_id"]')
        const dias = document.querySelectorAll('[name="dia"]')
        const inputHiddenDia = document.querySelector('[name="dia_id"]')
        const inputHiddenHora = document.querySelector('[name="hora_id"]')
        
        categoria.addEventListener('change', terminoBusqueda)
        dias.forEach(dia => dia.addEventListener('change', terminoBusqueda))

        // Si ya existe un valor en la página de editar lo asignamos, si no, lo dejamos comno string vacío
        let busqueda = {
            categoria_id: +categoria.value || '',
            dia: +inputHiddenDia.value || ''
        }

        // Comprobar si el objeto está lleno, si lo está, es la página de editar
        if(!Object.values(busqueda).includes('')) {

            // Función asincrona para que no se vuelva a agregar la clase horas__hora--deshabilitada, no se ejecutan las demás líneas hasta que acabe buscarEventos()
            (async () => {
                await buscarEventos();

                const id = inputHiddenHora.value
    
                // Resaltar la hora actual
                const horaSeleccionada = document.querySelector(`[data-hora-id="${id}"]`)
    
                horaSeleccionada.classList.remove('horas__hora--deshabilitada')
                horaSeleccionada.classList.add('horas__hora--seleccionada')

                horaSeleccionada.onclick = seleccionarHora;
            })();
        }

        function terminoBusqueda(e) {
            busqueda[e.target.name] = e.target.value

            // Reiniciar los campos ocultos y el selector de horas
            inputHiddenHora.value = '';
            inputHiddenDia.value = '';

            // Reiniciar selección de horas
            const horaPrevia = document.querySelector('.horas__hora--seleccionada')
            if(horaPrevia) {
                horaPrevia.classList.remove('horas__hora--seleccionada')
            }

            // Prevenir llamar a la API con el objeto incompleto
            if(Object.values(busqueda).includes('')) {
                return
            }

            buscarEventos();
        }

        async function buscarEventos() {

            const { dia, categoria_id } = busqueda
            const url = `/api/eventos-horario?dia_id=${dia}&categoria_id=${categoria_id}`

            const resultado = await fetch(url);
            const eventos = await resultado.json();
            obtenerHorasDisponibles(eventos);
        }
        
        function obtenerHorasDisponibles(eventos) {
            // Reiniciar las horas
            const listadoHoras = document.querySelectorAll('#horas li')
            listadoHoras.forEach( li => li.classList.add('horas__hora--deshabilitada'))

            // Comprobar eventos ya tomados, y quitar la variable de deshabilitado
            const horasTomadas = eventos.map( evento => evento.hora_id)
            
            // Covertir listadoHoras en un arreglo para usar la función filter
            const listadoHorasArray = Array.from(listadoHoras)
            // Filtrar horas que no esten ocupadas
            const resultado = listadoHorasArray.filter( li => !horasTomadas.includes(li.dataset.horaId))

            // Hacer visibles las horas disponibles
            resultado.forEach( li => li.classList.remove('horas__hora--deshabilitada'))

            // Tomar las horas disponibles con un selector de css
            const horasDisponibles = document.querySelectorAll('#horas li:not(.horas__hora--deshabilitada)')
            horasDisponibles.forEach( hora => hora.addEventListener('click', seleccionarHora))
        }

        function seleccionarHora(e) {

            // Deshabilitar la hora previa, si hay un nuevo click
            const horaPrevia = document.querySelector('.horas__hora--seleccionada')
            if(horaPrevia) {
                horaPrevia.classList.remove('horas__hora--seleccionada')
            }

            // Agregar clase de seleccionado
            e.target.classList.add('horas__hora--seleccionada')

            inputHiddenHora.value = e.target.dataset.horaId

            // Llenar el campo oculto de día
            inputHiddenDia.value = document.querySelector('[name="dia"]:checked').value
        }
    }
})();