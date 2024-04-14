document.addEventListener("DOMContentLoaded", function () {
  const zonadibujo = document.getElementById("zonadibujo");
  const paletaColores = document.getElementById("paleta");
  const pincelEstado = document.getElementById("pincel");

  let colorActivo = ""; // Cor activa inicialmente
  let pintando = false; // Estado do pincel

  // Manexador de eventos para seleccionar unha cor da paleta
  paletaColores.addEventListener("click", function (event) {
    const colorSeleccionado = event.target.classList[0]; // Obter a clase da cor seleccionada
    if (colorSeleccionado && colorSeleccionado.startsWith("color")) {
      // Eliminar a clase de borde da cor previamente seleccionada
      const colorAnterior = document.querySelector(".seleccionado");
      if (colorAnterior) {
        colorAnterior.classList.remove("seleccionado");
      }

      // Establecer a cor activa e engadir a clase de borde á cor seleccionada
      colorActivo = colorSeleccionado;
      event.target.classList.add("seleccionado");
    }
  });

  // Manexador de eventos para activar/desactivar o pincel
  function activar_desactivar_pincel() {
    pintando = !pintando;
    pincelEstado.textContent = pintando
      ? "PINCEL ACTIVADO"
      : "PINCEL DESACTIVADO";
  }

  // Manexador de eventos para pintar sobre as celdas do taboleiro
  function pintarCelda(celda) {
    if (pintando) {
      celda.style.backgroundColor =
        colorActivo === "color6" ? "#FFF" : getColor(colorActivo);
    }
  }

  // Función para obter a cor correspondente á cor seleccionada
  function getColor(color) {
    switch (color) {
      case "color1":
        return "#FF0";
      case "color2":
        return "#0F0";
      case "color3":
        return "#000";
      case "color4":
        return "#F00";
      case "color5":
        return "#06C";
      default:
        return "";
    }
  }

  // Crear o contenedor do taboleiro de debuxo
  const contenedorTablero = document.createElement("div");
  contenedorTablero.id = "contenedor-tablero";
  contenedorTablero.classList.add("contenedorTablero");

  // Configurar estilos do contenedor do taboleiro
  contenedorTablero.style.border = "3px solid black";
  contenedorTablero.style.display = "inline-block";
  contenedorTablero.style.padding = "2px";

  // Crear o taboleiro de debuxo
  const tablero = document.createElement("div");
  tablero.classList.add("tablerodibujo");

  // Configurar estilos do taboleiro
  tablero.style.display = "grid";
  tablero.style.gridTemplateColumns = "repeat(30, 10px)";
  tablero.style.gridTemplateRows = "repeat(30, 10px)";

  // Crear as celdas do taboleiro
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      const celda = document.createElement("div");
      celda.classList.add("celda");
      celda.style.width = "10px";
      celda.style.height = "10px";
      celda.style.border = "1px solid #ccc";
      tablero.appendChild(celda);
    }
  }

  // Manexador de eventos delegado para pintar ou mover o ratón sobre a celda
  tablero.addEventListener("click", function(event){
    let celdaSeleccionada = event.target.closest('.celda');
    if (!celdaSeleccionada) return;
    activar_desactivar_pincel();
    pintarCelda(celdaSeleccionada);    
  });

  tablero.addEventListener("mouseover", function (event) {
    let celdaSeleccionada = event.target.closest('.celda');
    if (!celdaSeleccionada) return;
    pintarCelda(celdaSeleccionada);
  });

  // Insertar o taboleiro dentro do contenedor
  contenedorTablero.appendChild(tablero);

  // Insertar o contenedor do taboleiro dentro do div con id "zonadibujo"
  zonadibujo.appendChild(contenedorTablero);
});
