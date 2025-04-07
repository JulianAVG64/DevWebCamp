<main class="registro">
    <h2 class="registro__heading"><?echo $titulo; ?></h2>
    <p class="registro__descripcion">Elige tu plan</p>

    <div class="paquetes__grid">
        <div data-aos="fade-right" class="paquete">
            <h3 class="paquete__nombre">Pase Gratis</h3>
            <ul class="paquete__lista">
                <li class="paquete__elemento">Acceso Virtual a DevWebCamp</li>
            </ul>

            <p class="paquete__precio">$0</p>

            <form action="/finalizar-registro/gratis" method="POST">
                <input type="submit" class="paquetes__submit" value="Inscripción Gratis">
            </form>
        </div>

        <div data-aos="fade-down" class="paquete">
            <h3 class="paquete__nombre">Pase Presencial</h3>
            <ul class="paquete__lista">
                <li class="paquete__elemento">Acceso Presencial a DevWebCamp</li>
                <li class="paquete__elemento">Pase por 2 días</li>
                <li class="paquete__elemento">Acceso a Talleres y conferencias</li>
                <li class="paquete__elemento">Acceso a las Grabaciones</li>
                <li class="paquete__elemento">Camisa del Evento</li>
                <li class="paquete__elemento">Comida y Bebida</li>
            </ul>

            <p class="paquete__precio">$199</p>
        </div>

        <div data-aos="fade-left" class="paquete">
            <h3 class="paquete__nombre">Pase Virtual</h3>
            <ul class="paquete__lista">
                <li class="paquete__elemento">Acceso Virtual a DevWebCamp</li>
                <li class="paquete__elemento">Pase por 2 días</li>
                <li class="paquete__elemento">Enlace a Talleres y conferencias</li>
                <li class="paquete__elemento">Acceso a las Grabaciones</li>
            </ul>

            <p class="paquete__precio">$49</p>
        </div>
    </div>
</main>