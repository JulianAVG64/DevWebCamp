(function() {
    const tagsInput = document.querySelector('#tags_input')

    if(tagsInput) {

        const tagsDiv = document.querySelector('#tags')
        const tagsInputHidden = document.querySelector('[name="tags"]')

        let tags = []

        // Escuchar los cambios en el input
        tagsInput.addEventListener('keypress', guardarTag)

        function guardarTag(e) {
            if(e.keyCode === 44) {
                // Prevenir espacios en blanco
                if(e.target.value.trim() === '' || e.target.value < 1) {
                    return
                }

                // Prevenir accion default para evitar la que se agregue la coma
                e.preventDefault()

                // Agregar tag al arreglo
                tags = [...tags, e.target.value.trim()]

                // Limpiar Input
                tagsInput.value = '';

                mostrarTags()
            }
        }

        function mostrarTags() {
            tagsDiv.textContent = ''
            tags.forEach(tag => {
                const etiqueta = document.createElement('LI');
                etiqueta.classList.add('formulario__tag')
                etiqueta.textContent = tag
                etiqueta.ondblclick = eliminarTag
                tagsDiv.appendChild(etiqueta)
            })

            actualizarInputHidden()
        }

        function eliminarTag(e) {
            // Remover elemento
            e.target.remove()

            // Remover del arreglo de tags
            tags = tags.filter(tag => tag !== e.target.textContent)

            actualizarInputHidden()
        }

        // Actualizar input para agregar o quitar el tag a la bd
        function actualizarInputHidden() {
            tagsInputHidden.value = tags.toString();
        }
    }
})() // IIFE
