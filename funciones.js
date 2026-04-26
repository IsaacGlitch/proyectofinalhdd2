function agregarCarrito(producto) {
    alert(producto + " agregado al carrito 🛒");
}

document.querySelectorAll(".favorito").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("activo");

        const icono = btn.querySelector(".icono");

        if (btn.classList.contains("activo")) {
            icono.textContent = "❤";
        } else {
            icono.textContent = "♡";
        }

    });

});