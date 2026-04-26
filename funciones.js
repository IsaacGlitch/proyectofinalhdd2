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

/* LOGIN */
function abrirLogin() {
    document.getElementById("modalLogin").style.display = "block";
}

function cerrarLogin() {
    document.getElementById("modalLogin").style.display = "none";
}

/* REGISTRO */
function abrirRegistro() {
    document.getElementById("modalRegistro").style.display = "block";
}

function cerrarRegistro() {
    document.getElementById("modalRegistro").style.display = "none";
}

function registrarUsuario() {
    let nuevoUser = document.getElementById("nuevoUsuario").value;
    let nuevaPass = document.getElementById("nuevaPassword").value;

    if (nuevoUser === "" || nuevaPass === "") {
        alert("Completa todos los campos");
        return;
    }

    alert("Usuario " + nuevoUser + " registrado con éxito 🎉");
    cerrarRegistro();
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
