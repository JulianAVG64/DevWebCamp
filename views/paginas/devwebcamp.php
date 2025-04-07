<main class="devwebcamp">
    <h2 class="devwebcamp__heading"><?php echo $titulo; ?></h2>
    <p class="devwebcamp__descripcion">Conoce la conferencia mas importante de Latinoamérica</p>

    <div class="devwebcamp__grid">
        <div <?php aos_animation(); ?> class="devwebcamp__imagen">
            <picture>
                <source srcset="build/img/sobre_devwebcamp.avif" type="image/avif">
                <source srcset="build/img/sobre_devwebcamp.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/sobre_devwebcamp.jpg" alt="Imagen DevWebcamp">
            </picture>
        </div>

        <div class="devwebcamp__contenido">
            <p <?php aos_animation(); ?> class="devwebcamp__texto">Donec vel tincidunt ligula, eu ornare enim. Phasellus eu augue iaculis, luctus orci eu, elementum dolor. Integer egestas cursus urna. Aliquam vel fringilla sem. Pellentesque eget ligula fringilla, ullamcorper lacus sit amet, maximus sem. Fusce viverra consequat venenatis. Nullam eget ante tellus.</p>
            
            <p <?php aos_animation(); ?> class="devwebcamp__texto">Donec vel tincidunt ligula, eu ornare enim. Phasellus eu augue iaculis, luctus orci eu, elementum dolor. Integer egestas cursus urna. Aliquam vel fringilla sem. Pellentesque eget ligula fringilla, ullamcorper lacus sit amet, maximus sem. Fusce viverra consequat venenatis. Nullam eget ante tellus.</p>
        </div>
    </div>
</main>