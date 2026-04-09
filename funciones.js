function agregarCarrito(producto) {
    alert(producto + " agregado al carrito 🛒");
}

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

function registrar() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem(user, pass);
    alert("Usuario registrado correctamente");
    cerrarModal();
}

function iniciarSesion() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        alert("Bienvenido " + user);
    } else {
        alert("Datos incorrectos");
    }
}

function seleccionarCategoria(event, categoria) {
    alert("Seleccionaste: " + categoria);

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("seleccionado");
    });

    event.currentTarget.classList.add("seleccionado");
}