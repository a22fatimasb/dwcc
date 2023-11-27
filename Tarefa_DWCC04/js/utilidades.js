// Array cun listado de páises europeos
var paisesEuropeos = [
  "Albania",
  "Alemania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaiyán",
  "Bélgica",
  "Bielorrusia",
  "Bosnia y Herzegovina",
  "Bulgaria",
  "Chipre",
  "Croacia",
  "Dinamarca",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estonia",
  "Finlandia",
  "Francia",
  "Georgia",
  "Grecia",
  "Hungría",
  "Irlanda",
  "Islandia",
  "Italia",
  "Kazajistán",
  "Kosovo",
  "Letonia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Macedonia del Norte",
  "Malta",
  "Moldavia",
  "Mónaco",
  "Montenegro",
  "Noruega",
  "Países Bajos",
  "Polonia",
  "Portugal",
  "Reino Unido",
  "República Checa",
  "Rumanía",
  "Rusia",
  "San Marino",
  "Serbia",
  "Suecia",
  "Suiza",
  "Turquía",
  "Ucrania",
  "Vaticano",
];

// Amosa o número de elementos do Array.
function mostrarNumeroTotaldeElementos(paisesEuropeos) {
  if (paisesEuropeos && paisesEuropeos.length > 0) {
    console.log("O número total de países é" + paisesEuropeos.length);
  }
}
// Amosa todos os países.
function amosarTodososElementos(paisesEuropeos) {
  if (paisesEuropeos && paisesEuropeos.length > 0) {
    console.log("Array con todos os países de Europa:");
    paisesEuropeos.forEach((pais) => console.log(pais));
  }
}
// Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
function amosarTodososElementosaInversa(paisesEuropeos) {
  if (paisesEuropeos && paisesEuropeos.length > 0) {
    const paisesEuropeosCopia = paisesEuropeos.slice();
    const paisesInversos = paisesEuropeosCopia.reverse();
    console.log("Array con todos os países de Europa ordenados a inversa:");
    paisesInversos.forEach((pais) => console.log(pais));
  }
}
// Engade un país ao comezo do Array.
function engadirElementoaoComezo(paisesEuropeos) {
  novoPais = "Cataluña";
  if (paisesEuropeos) {
    paisesEuropeos.unshift(novoPais);
    console.log("Array co novo país ao comezo:", paisesEuropeos);
  }
}
// Engade un país ao final do Array.
function engadirElementoaoFinal(paisesEuropeos) {
  novoPais = "Galicia";
  if (paisesEuropeos) {
    paisesEuropeos.push(novoPais);
    console.log("Array co novo país ao final:", paisesEuropeos);
  }
}
// Elimina un elemento ao comezo do Array e indica cal foi.
function eliminarElementoaoComezo(paisesEuropeos) {
  if (paisesEuropeos && paisesEuropeos.length > 0) {
    var paisEliminado = paisesEuropeos.shift();
    console.log("Elemento eliminado ao comezo:", paisEliminado);
  } else {
    console.log("Non hai elementos para eliminar ao comezo.");
  }
}
// Elimina un elemento ao final do Array e indica cal foi.
function eliminarElementoaoFinal(paisesEuropeos) {
  if (paisesEuropeos && paisesEuropeos.length > 0) {
    var paisEliminado = paisesEuropeos.pop();
    console.log("Elemento eliminado ao comezo:", paisEliminado);
  } else {
    console.log("Non hai elementos para eliminar ao comezo.");
  }
}
// Amosa o elemento que se atope na posición que che indique o usuario.
function amosarElementoIndicadoporUsuario(paisesEuropeos) {
  const posicion = prompt("Indica a posición do país a amosar: ");

  if (posicion > 0 && posicion <= paisesEuropeos.length) {
    const indice = posicion - 1;
    const pais = paisesEuropeos[indice];
    console.log(`O país na posición ${posicion} é ${pais}`);
  } else {
    console.log("Posición incorrecta ou array sen elementos.");
  }
}
// Amosa a posición na que se atopa un elemento indicado polo usuario.
function amosarPosicionIndicadoporUsuario(paisesEuropeos) {
  const pais = prompt("Indica o país que desexas amosar a súa posición: ");
  const posicion = paisesEuropeos.indexOf(pais);

  if (posicion !== -1) {
    console.log(`O país ${pais} atópase na posición ${posicion + 1}.`);
  } else {
    console.log("País incorrecto ou non atopado no array.");
  }
}
// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
function amosarElementosEntrePosicions(paisesEuropeos) {
  const posicionInicio = prompt("Indica a posición de inicio: ");
  const posicionFin = prompt("Indica a posición de fin: ");

  const inicio = parseInt(posicionInicio) - 1;
  const fin = parseInt(posicionFin) - 1;

  if (inicio > 0 && fin <= paisesEuropeos.length && inicio <= fin) {
    const paisesEuropeosCopia = paisesEuropeos.slice();
    const paisesSeleccionados = paisesEuropeosCopia.slice(inicio, fin);
    console.log(`Os países entre as posicións ${inicio} e ${fin} son:`);
    paisesSeleccionados.forEach((pais) => console.log(pais));
  } else {
    console.log("Posicións incorrectas ou array sen elementos.");
  }
}
