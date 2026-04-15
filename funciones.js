function agregarCarrito(producto) {
    alert(producto + " agregado al carrito 🛒");
}

/* LOGIN */
function abrirLogin() {
    document.getElementById("modalLogin").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("modalLogin").style.display = "none";
}

function iniciarSesion() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Completa todos los campos");
        return;
    }

    alert("Bienvenido " + user + " 🎮");
    cerrarLogin();
}