// Botones de las cards para abrir el modal
let botones = document.querySelectorAll(".btn-vermas");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
        let modal = new bootstrap.Modal(document.getElementById("infoModal"));
        modal.show();
    })
})

// Validacion del formulario de login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Valores de acceso para esta actividad
    const USER_DEFAULT = "techstore@gmail.com"
    const PASSWORD_DEFAULT = "tech2024"

    if (email === "" || password === "") {
        message.innerHTML = "Todos los campos son obligatorios!";
        message.className = "text-warning";
    } else if (email === USER_DEFAULT && password === PASSWORD_DEFAULT) {
        message.innerHTML = "Bienvenido a TechStore!";
        message.className = "text-success";
    } else {
        message.innerHTML = "Error: Usuario o contraseña invalidos!";
        message.className = "text-danger";
    }
});