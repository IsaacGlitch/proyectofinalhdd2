/* ========================= */
/* CARRITO */
/* ========================= */
function agregarCarrito(producto) {
    alert(`${producto} agregado al carrito 🛒`);
}


/* ========================= */
/* MODALES */
/* ========================= */
function mostrarLogin() {
    document.getElementById("loginForm").style.display = "flex";
}

function mostrarRegistro() {
    document.getElementById("registroForm").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registroForm").style.display = "none";
}


/* ========================= */
/* AUTENTICACIÓN */
/* ========================= */
function registrar() {
    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();

    if (!user || !pass) {
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem(user, pass);
    alert("Usuario registrado correctamente");
    cerrarModal();
}

function iniciarSesion() {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    const storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        alert(`Bienvenido ${user}`);
        cerrarModal();
    } else {
        alert("Datos incorrectos");
    }
}


/* ========================= */
/* CATEGORÍAS */
/* ========================= */
function seleccionarCategoria(event, categoria) {
    alert(`Seleccionaste: ${categoria}`);

    // Quitar selección previa SOLO en categorías
    document.querySelectorAll(".cinta-categorias .card").forEach(card => {
        card.classList.remove("seleccionado");
    });

    event.currentTarget.classList.add("seleccionado");
}


/* ========================= */
/* CINTA CON FLECHAS */
/* ========================= */
function scrollCategorias(direccion) {
    const contenedor = document.getElementById("cinta");

    const scrollAmount = 300;

    contenedor.scrollBy({
        left: direccion * scrollAmount,
        behavior: "smooth"
    });
}