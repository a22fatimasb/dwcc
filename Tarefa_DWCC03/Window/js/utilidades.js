// Declaramos a variable ventaSecundaria
let ventaSecundaria;

// Pide permiso ao usuario e, só se acepta, abre a nova ventá.
function pedirPermisoAoUsuario() {
    const permisoUsuario = prompt("¿Acepta que se abra unha xanela nova? Pulse 's' para si e 'n' para non.");

    if (permisoUsuario === 's') {
        abrirVentaSecundaria();
    }  else {
        alert("O usuario non deu permiso para abrir a nova xanela.");
    }
}

// Función para desprazar xanela secundaria
function desprazarVentaSecundaria(){
    if (ventaSecundaria && !ventaSecundaria.closed) {
        // Utiliza os métodos moveBy e moveTo
        ventaSecundaria.moveBy(50,50);
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
    function aumentarTamanoVenta(){
        
        if (ventaSecundaria && !ventaSecundaria.closed) {
           // Utiliza os métodos moveBy e moveTo
           ventaSecundaria.resizeBy(50,50);

           // Asegura que a ventá secundaria quede visible despois de cada operación
           ventaSecundaria.focus();
        } else {
            alert("A xanela secundaria está pechada.");
        }
    }

    // Función que redimensiona a ventá a 500 píxeles de alto por 500 de ancho
    function redimensionarVenta(){
       
        if (ventaSecundaria && !ventaSecundaria.closed) {
            ventaSecundaria.resizeTo(500,500);

            // Asegura que a ventá secundaria quede visible despois de cada operación
            ventaSecundaria.focus();
        } else {
            alert("A xanela secundaria está pechada.");
        }
    }

// Abre a nova xanela coas propiedades especificadas.
function abrirVentaSecundaria() {
    // A xanela deberá ter as seguintes propiedades: sen barras de ferramentas nin menú. Terá 300px de ancho x 300px de alto e se colocará a 400px x 400px.
    ventaSecundaria = window.open("", "_blank", "width=300, height=300, top=400, left=400, toolbar=no, menubar=no");

    if (ventaSecundaria) {
        // Crear un ficheiro HTML
        ventaSecundaria.document.write(`
            <h3>Exemplo de Xanela nova</h3>
            <p>URL: ${window.location.href}</p>
            <p>Protocolo: ${window.location.protocol}</p>
            <p>Navegador: ${navigator.userAgent}</p>
            <p>Java está dispoñible: ${navigator.javaEnabled() ? 'Sí' : 'Non'}</p>
                     
           >
        `
        );
        // Asegura que a ventá secundaria quede visible despois de cada operación
        ventaSecundaria.focus();
    } else {
        // Controlar que a xanela está aberta, no caso de que fose pechada amosar unha mensaxe de erro.
        alert("Non se puido abrir a xanela secundaria.");
    }
}

