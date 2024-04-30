let patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{1,20}$/;
let patronApellidos = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]{1,40}$/;
let patronEmail = /^[\w._%+-]+@[\w.-]+\.(com|net|es|gal|org)$/;
let patronUsuario = /^\w{1,20}$/;
let patronContrasenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let patronTelefono = /^\d{9}$/;

function validarNombre(nombre) {
    if (!patronNombre.test(nombre)) {
        console.log("El nombre debe contener caracteres alfabéticos con una extensión máxima de 20 caracteres.");
        return false;
    }
    return true;
}

function validarApellidos(apellidos) {
    if (!patronApellidos.test(apellidos)) {
        console.log("Los apellidos deben contener caracteres alfabéticos con una extensión máxima de 40 caracteres.");
        return false;
    }
    return true;
}

function validarEmail(correo) {
    if (!patronEmail.test(correo)) {
        console.log("El correo electrónico debe tener un formato válido (usuario@dominio.com/net/es/gal/org).");
        return false;
    }
    return true;
}

function validarUsuario(usuario) {
    if (!patronUsuario.test(usuario)) {
        console.log("El usuario debe contener caracteres alfanuméricos con una longitud máxima de 20 caracteres.");
        return false;
    }
    return true;
}

function validarContrasenha(clave) {
    if (!patronContrasenha.test(clave)) {
        console.log("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
        return false;
    }
    return true;
}

function validarTelefono(telefono) {
    if (!patronTelefono.test(telefono)) {
        console.log("El teléfono debe contener solo 9 números.");
        return false;
    }
    return true;
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let telefono = document.getElementById("telefono").value;

    if (
        validarNombre(nombre) &&
        validarApellidos(apellidos) &&
        validarEmail(correo) &&
        validarUsuario(usuario) &&
        validarContrasenha(clave) &&
        validarTelefono(telefono)
    ) {
        return true;
    }
    return false;
}

function enviarDatos() {
    let peticion = new XMLHttpRequest();
    let url = "php/registrar.php";
    let data = new FormData(document.getElementById('formulario'));

    peticion.open("POST", url, true);
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    peticion.onreadystatechange = function() {
        if (peticion.readyState === XMLHttpRequest.DONE) {
            if (peticion.status === 200) {
                document.getElementById("info-respuesta").style.display = "block";
                document.getElementById("respuesta-servidor").innerHTML = peticion.responseText;
            } else {
                alert("Error al enviar los datos al servidor.");
            }
        }
    };

    peticion.send(
        "nombre=" + data.get("nombre") + "&" +
        "apellidos=" + data.get("apellidos") + "&" +
        "telefono=" + data.get("telefono") + "&" +
        "correo=" + data.get("correo") + "&" +
        "usuario=" + data.get("usuario") + "&" +
        "clave=" + data.get("clave")
    );
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("formulario")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            if (validarFormulario()) {
                enviarDatos();
            } else {
                alert("Por favor, revise los campos del formulario.");
            }
        });
});
