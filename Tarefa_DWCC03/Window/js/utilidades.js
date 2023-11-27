 // Función para desprazar xanela secundaria
 function desprazarVentaSecundaria() {
    if (ventaSecundaria && !ventaSecundaria.closed) {
      // Utilizamos o método moveBy
      ventaSecundaria.moveBy(50, 50);
      // Asegura que a ventá secundaria quede visible despois de cada operación
      ventaSecundaria.focus();
    } else {
      alert("A xanela secundaria está pechada.");
    }
  }
  // Función para pechar a xanela secundaria
  function pecharVentaSecundaria() {
    if (ventaSecundaria && !ventaSecundaria.closed) {
      ventaSecundaria.close();
    } else {
      alert("A xanela secundaria xa está pechada.");
    }
  }

  // Función que aumenta o tamaño da ventá 50 píxeles de alto e 50 de ancho
  function aumentarTamanoVenta() {
    if (ventaSecundaria && !ventaSecundaria.closed) {
      ventaSecundaria.resizeBy(50, 50);

      // Asegura que a ventá secundaria quede visible despois de cada operación
      ventaSecundaria.focus();
    } else {
      alert("A xanela secundaria está pechada.");
    }
  }

  // Función que redimensiona a ventá a 500 píxeles de alto por 500 de ancho
  function redimensionarVenta() {
    if (ventaSecundaria && !ventaSecundaria.closed) {
      ventaSecundaria.resizeTo(500, 500);

      // Asegura que a ventá secundaria quede visible despois de cada operación
      ventaSecundaria.focus();
    } else {
      alert("A xanela secundaria está pechada.");
    }
  }
