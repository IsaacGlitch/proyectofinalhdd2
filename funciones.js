function scrollSeccion(id, direccion) {
    const contenedor = document.getElementById(id);

    contenedor.scrollBy({
        left: direccion * 400,
        behavior: "smooth"
    });
}