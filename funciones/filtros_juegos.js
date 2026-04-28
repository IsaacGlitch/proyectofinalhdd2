document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("buscador");
    const contenedor = document.querySelector(".grid-juegos");
    const mensaje = document.getElementById("mensaje-vacio");
    const resetBtn = document.getElementById("reset-filtros");

    let juegos = Array.from(document.querySelectorAll(".card"));

    // ESTADO DE FILTROS
    let filtros = {
        ordenar: "",
        plataforma: "",
        categoria: "",
        texto: ""
    };

    // CUSTOM SELECTS
    const selects = document.querySelectorAll(".custom-select");

    selects.forEach(select => {
        const selected = select.querySelector(".selected");
        const options = select.querySelectorAll(".options div");

        selected.addEventListener("click", () => {
            cerrarTodos(select);
            select.classList.toggle("active");
        });

        options.forEach(option => {
            option.addEventListener("click", () => {
                selected.textContent = option.textContent;
                select.classList.remove("active");

                const value = option.dataset.value;

                if (select.id === "filtro-ordenar") filtros.ordenar = value;
                if (select.id === "filtro-plataforma") filtros.plataforma = value;
                if (select.id === "filtro-categoria") filtros.categoria = value;

                aplicarFiltrosYOrden();
            });
        });
    });

    function cerrarTodos(actual) {
        selects.forEach(s => {
            if (s !== actual) s.classList.remove("active");
        });
    }

    document.addEventListener("click", (e) => {
        selects.forEach(select => {
            if (!select.contains(e.target)) {
                select.classList.remove("active");
            }
        });
    });

    // BUSCADOR
    buscador.addEventListener("input", () => {
        filtros.texto = buscador.value.toLowerCase();
        aplicarFiltrosYOrden();
    });

    // BOTÓN RESET DE FILTROS
    resetBtn.addEventListener("click", () => {

        filtros = {
            ordenar: "",
            plataforma: "",
            categoria: "",
            texto: ""
        };

        buscador.value = "";

        document.querySelector("#filtro-ordenar .selected").textContent = "Ordenar por";
        document.querySelector("#filtro-plataforma .selected").textContent = "Plataforma";
        document.querySelector("#filtro-categoria .selected").textContent = "Categoría";

        aplicarFiltrosYOrden();
    });

    // FILTRAR + ORDENAR
    function aplicarFiltrosYOrden() {

        let juegosFiltrados = juegos.filter(juego => {
            const nombre = juego.querySelector("h3").textContent.toLowerCase();
            const plataformaJuego = juego.dataset.plataforma;
            const categoriaJuego = juego.dataset.categoria;

            return (
                nombre.includes(filtros.texto) &&
                (filtros.plataforma === "" || plataformaJuego === filtros.plataforma) &&
                (filtros.categoria === "" || categoriaJuego === filtros.categoria)
            );
        });

        // ORDENAR
        if (filtros.ordenar === "menor") {
            juegosFiltrados.sort((a, b) => a.dataset.precio - b.dataset.precio);
        } else if (filtros.ordenar === "mayor") {
            juegosFiltrados.sort((a, b) => b.dataset.precio - a.dataset.precio);
        }

        // LIMPIAR GRID
        contenedor.innerHTML = "";

        // MOSTRAR RESULTADOS
        if (juegosFiltrados.length === 0) {
            mensaje.style.display = "block";
        } else {
            mensaje.style.display = "none";

            juegosFiltrados.forEach(juego => {
                contenedor.appendChild(juego);
            });
        }
    }

});