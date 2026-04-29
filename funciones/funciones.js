function scrollSeccion(id, direccion) {
    const contenedor = document.getElementById(id);

    contenedor.scrollBy({
        left: direccion * 400,
        behavior: "smooth"
    });
}

function verProducto(element) {
    const card = element.closest('.accesorio-card');
    if (!card) return;

    const nombre = card.querySelector('h2')?.textContent || 'Producto';
    const descripcion = card.querySelector('p')?.textContent || '';
    const precio = card.querySelector('.precio')?.textContent || '';
    const imagen = card.querySelector('img');
    const imagenSrc = imagen?.getAttribute('src') || '';
    const imagenAlt = imagen?.getAttribute('alt') || nombre;

    document.getElementById('producto-imagen').setAttribute('src', imagenSrc);
    document.getElementById('producto-imagen').setAttribute('alt', imagenAlt);
    document.getElementById('producto-nombre').textContent = nombre;
    document.getElementById('producto-descripcion').textContent = descripcion;
    document.getElementById('producto-precio').textContent = precio;
    document.getElementById('modalProducto').style.display = 'block';
}

function cerrarModalProducto() {
    document.getElementById('modalProducto').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.boton').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            verProducto(link);
        });
    });
});
