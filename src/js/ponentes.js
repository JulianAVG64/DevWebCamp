(function() {
    const ponentesInput = document.querySelector('#ponentes')

    if(ponentesInput) {
        let ponentes = []
        let ponentesFiltrados = []

        obtenerPonenetes();

        async function obtenerPonenetes() {
            const url = `/api/ponentes`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            formatearPonentes(resultado)
        }

        function formatearPonentes(arrayPonentes = []) {
            ponentes = arrayPonentes.map( ponente => {
                return {
                    nombre: `${ponente.nombre.trim()} ${ponente.apellido.trim()}`,
                    id: ponente.id
                }
            })

            console.log(ponentes)
        }
    }
})();