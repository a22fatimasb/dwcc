// Función para crear unha cookie
function setCookie(cnome, cvalor, exdays) {
  let data = new Date();
  data.setTime(data.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expira = "expires=" + data.toGMTString();
  document.cookie = cnome + "=" + cvalor + ";" + expira + ";path=/";
}

// Función para obter unha cookie
function getCookie(nome) {
  let nomeCookie = nome + "=";
  let cookies = decodeURIComponent(document.cookie).split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nomeCookie) == 0) {
      return cookie.substring(nomeCookie.length, cookie.length);
    }
  }

  return "";
}

// Función para eleminar unha cookie
function removeCookie(cnome) {
  if (getCookie(cnome)) {
    setCookie(cnome, "", -1);
    return true;
  }
  return false;
}

// Función que detecte unha cookie
function detectCookie(cnome) {
  let nomeCookie = cnome + "=";
  let cookies = decodeURIComponent(document.cookie).split(";");
  for (let cookie of cookies) {
    let c = cookie.trim();
    if (c.startsWith(nomeCookie)) {
      return true;
    }
  }
  return false;
}

function cookieCargada() {
  return document.cookie != "";
}

// Función para validar se é unha cadea de texto que tan só teña letras
function validarCadeaTexto(cadea) {
  return /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/.test(cadea);
}

// Función para validar a idade entre 0 e 105 anos
function validarIdade(idade) {
  return idade >= 0 && idade <= 105;
}

// Función para validar un NIF

function validarNif(nif) {
  return /^\d{8}[a-zA-Z]$/.test(nif);
}

// Funcion para validar un correo electrónico
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Función para validar a data en formato dd/mm/aaaa o dd-mm-aaaa
function validarData(fecha) {
  return /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/.test(fecha);
}
// Función para validar un número de teléfono de 9 díxitos
function validarTelefono(telefono) {
  return /^\d{9}$/.test(telefono);
}

// Función para validar o formato de hora hh:mm
function validarHora(hora) {
  return /^([01][1-9]|[2][0-3]):(0[1-9]|[1-5][0-9])$/.test(hora);
}

// Función para validar o formato da contrasinal
function validarContrasinal(contrasinal) {
  return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{5,15}$/.test(contrasinal);
}

// Función para mostrar erros
function mostrarErros(mensaxe) {
  const errosElemento = document.getElementById("errores");
  if (errosElemento) {
    errosElemento.innerHTML = mensaxe;
  }
}
// Función para validar os campos do formulario antes de enviar
function validarFormulario() {
  // Validar nome
  let nome = document.getElementById("nombre").value;
  if (!validarCadeaTexto(nome)) {
    mostrarErros("O nome introducidos deben ser unha cadea de texto.");
    document.getElementById("nombre").classList.add("error");
    return false;
  }

  // Validar apelidos
  let apelidos = document.getElementById("apellidos").value;
  if (!validarCadeaTexto(apelidos)) {
    mostrarErros("Os apelidos introducidos deben ser unha cadea de texto.");
    document.getElementById("apellidos").classList.add("error");
    return false;
  }

  // Validar idade
  let idade = parseInt(document.getElementById("edad").value);
  if (!validarIdade(idade)) {
    mostrarErros("A idade debe estar comprendida entre 0 y 105 años.");
    document.getElementById("edad").classList.add("error");
    //document.getElementById("edad").focus();
    return false;
  }

  // Validar NIF
  let nif = document.getElementById("nif").value;
  if (!validarNif(nif)) {
    mostrarErros("O NIF introducido non é válido.");
    document.getElementById("nif").classList.add("error");
    //document.getElementById("nif");
    return false;
  }

  // Validar email
  let email = document.getElementById("email").value;
  if (!validarEmail(email)) {
    mostrarErros("O correo electrónico introducido non é válido.");
    document.getElementById("email").classList.add("error");
    //document.getElementById("email").focus();
    return false;
  }

  // Validar provincia seleccionada
  let provincia = document.getElementById("provincia").value;
  if (provincia === "0") {
    mostrarErros("Debe seleccionar unha provincia.");
    document.getElementById("provincia").classList.add("error");
    //document.getElementById("provincia").focus();

    return false;
  }

  // Validar contrasinal
  let contrasinal = document.getElementById("contrasinal").value;
  if (!validarContrasinal(contrasinal)) {
    mostrarErros("O contrasinal non é válido.");
    document.getElementById("contrasinal").classList.add("error");
    return false;
  }

  // Validar data
  let data = document.getElementById("fecha").value;
  if (!validarData(data)) {
    mostrarErros("A data debe ter o formato dd/mm/aaaa ou dd-mm-aaaa.");
    document.getElementById("fecha").classList.add("error");
    //document.getElementById("fecha").focus();
    return false;
  }

  // Validar teléfono
  let telefono = document.getElementById("telefono").value;
  if (!validarTelefono(telefono)) {
    mostrarErros("O número de teléfono introducido non é válido.");
    document.getElementById("telefono").classList.add("error");
    // document.getElementById("telefono").focus();
    return false;
  }

  // Si todas as validacions pasan podese enviar o formulario

  return true;
}
// Comprobar si hay una cookie guardada al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  if (getCookie("nome")) {
    console.log("Cookie encontrada. Usuario: " + getCookie("nome"));
  } else {
    console.log("Non se encontrou ningunha cookie.");
  }

  document.getElementById("borrarCookie").onclick = function () {
    if (getCookie("nome")) {
      if (removeCookie("nome")) {
        console.log("Cookie borrada correctamente.");
      } else {
        console.log("Non se borrou a cookie correctamente.");
      }
    }
  };

  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      // Cancelar el envío del formulario por defecto
      event.preventDefault();
      if (validarFormulario()) {
        this.submit();
        let nome = prompt("Ingrese su nombre para la cookie:");
        if (nome) {
          setCookie("nome", nome, 30);
          console.log("Cookie guardada para el usuario: " + nome);
        }
      }
    });
});
