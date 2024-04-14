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

// Función para mostrar o número de visitas
function mostrar_numero_visitas() {
  let numeroVisitas = parseInt(getCookie("intentos")) || 0;
  document.getElementById("visitas").innerHTML =
    "Intento de Envíos del formulario: " + numeroVisitas;
}

// Función para incrementar o número de intentos
function incrementar_intentos() {
  let numeroVisitas = parseInt(getCookie("intentos")) || 0;
  numeroVisitas++;
  setCookie("intentos", numeroVisitas, 365);
  mostrar_numero_visitas();
}

// Función para pasar a maiusculas unha cadea
function convertirMaiusculas(elemento) {
  elemento.value = elemento.value.toUpperCase();
}

// Función que mostre os erros cometidos polo usuario
function mostrar_erros(mensaxe) {
  document.getElementById("erros").innerHTML = mensaxe;
}

// Expresiones regulares de validación

let patronCadea = /^[a-bA-ZÑñáéíóúÁÉÍÓÚ\s]+$/;
let patronEmail = /\S+@\S+\.\S+/;
let patronIdade = /^\d+$/;
let patronFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;
let patronTlf = /^\d{9}$/;
let patronHora = /^(\d{2}):(\d{2})$/;

function validarNombre() {
  let nombre = document.getElementById("nombre").value;
  if (patronCadea.test(nombre)) {
    return true;
  }
  mostrar_erros("O nome introducido debe ser unha cadea de texto.");
  document.getElementById("nombre").focus();
  return false;
}
function validarApellido() {
  let apellidos = document.getElementById("apellidos").value;
  if (patronCadea.test(apellidos)) {
    return true;
  }
  mostrar_erros("Os apelidos introducidos deben ser unha cadea de texto.");
  document.getElementById("apellidos").focus();
  return false;
}
function validarEdad() {
  let idade = parseInt(document.getElementById("edad").value);
  if (patronIdade.test(idade) && idade > 0 && idade < 105) {
    return true;
  }
  mostrar_erros("A idade debe estar comprendida entre 0 y 105 años.");
  document.getElementById("edad").focus();
  return false;
}
function validarTlf() {
  let telefono = parseInt(document.getElementById("telefono").value);
  if (patronTlf.test(telefono)) {
    return true;
  }
  mostrar_erros("O número de teléfono introducido non é válido.");
  document.getElementById("telefono").focus();
  return false;
}
function validarEmail() {
    let email = document.getElementById("email").value;
    if(patronEmail.test(email)){
        return true;
    }
    mostrar_erros("O correo electrónico introducido non é válido.");
    document.getElementById("email").focus();
    return false;
}

function validarFecha() {
    let dataNacemento = document.getElementById("dataNacemento").value;
    if(patronFecha.test(dataNacemento)){
        return true;
    }
    mostrar_erros("A data debe ter o formato dd/mm/aaaa ou dd-mm-aaaa.");
    document.getElementById("dataNacemento").focus;
    
    return false;
}
function validarProvincia() {
  let provincia = document.getElementById("provincia").value;
  if (provincia === "0") {
    mostrar_erros("Debe seleccionar unha provincia.");
    document.getElementById("provincia").focus();
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Páxina cargada");
  mostrar_numero_visitas();
  document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    if (
      validarNombre() &&
      validarApellido() &&
      validarEdad() &&
      validarTlf() &&
      validarEmail() &&
      validarFecha() &&
      validarProvincia()
    ) {
      if (confirm("¿Estás seguro de enviar los datos?")) {
        incrementar_intentos();
        this.submit();
      }
    }
});
});





