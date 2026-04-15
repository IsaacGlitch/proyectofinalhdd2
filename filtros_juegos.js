document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador");
    if (!buscador) return;

    const ordenar = document.getElementById("ordenar");
    const plataforma = document.getElementById("plataforma");
    const contenedor = document.querySelector(".grid-juegos");
    const mensaje = document.getElementById("mensaje-vacio");

    let juegos = Array.from(document.querySelectorAll(".card"));

    function aplicarFiltrosYOrden() {
        const texto = buscador.value.toLowerCase();
        const plataformaSeleccionada = plataforma.value;
        const tipoOrden = ordenar.value;

        let juegosFiltrados = juegos.filter(juego => {
            const nombre = juego.querySelector("h3").textContent.toLowerCase();
            const plataformaJuego = juego.dataset.plataforma;

            return (
                nombre.includes(texto) &&
                (plataformaSeleccionada === "" || plataformaJuego === plataformaSeleccionada)
            );
        });

        // ORDENAR
        if (tipoOrden === "menor") {
            juegosFiltrados.sort((a, b) => a.dataset.precio - b.dataset.precio);
        } else if (tipoOrden === "mayor") {
            juegosFiltrados.sort((a, b) => b.dataset.precio - a.dataset.precio);
        }

        // LIMPIAR GRID
        contenedor.innerHTML = "";

        // MOSTRAR RESULTADOS O MENSAJE
        if (juegosFiltrados.length === 0) {
            mensaje.style.display = "block";
        } else {
            mensaje.style.display = "none";

            juegosFiltrados.forEach(juego => {
                juego.style.display = "";
                contenedor.appendChild(juego);
            });
        }
    }

    // EVENTOS
    buscador.addEventListener("input", aplicarFiltrosYOrden);
    plataforma.addEventListener("change", aplicarFiltrosYOrden);
    ordenar.addEventListener("change", aplicarFiltrosYOrden);

});