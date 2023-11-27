// Array cun listado de páises europeos
var paisesEuropeos: string[] = [
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
function mostrarNumeroTotaldeElementos(paisesEuropeos: string[]): void {
    if (paisesEuropeos && paisesEuropeos.length > 0) {
        console.log("O número total de países é" + paisesEuropeos.length);
    }
}
// Amosa todos os países.
function amosarTodososElementos(paisesEuropeos: string[]): void {
    if (paisesEuropeos && paisesEuropeos.length > 0) {
        console.log("Array con todos os países de Europa:");
        paisesEuropeos.forEach((pais: string) => console.log(pais));
    }
}
// Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
function amosarTodososElementosaInversa(paisesEuropeos: string[]): void {
    if (paisesEuropeos && paisesEuropeos.length > 0) {
        const paisesEuropeosCopia: string[] = paisesEuropeos.slice();
        const paisesInversos: string[] = paisesEuropeosCopia.reverse();
        console.log("Array con todos os países de Europa ordenados a inversa:");
        paisesInversos.forEach((pais: string) => console.log(pais));
    }
}
// Engade un país ao comezo do Array.
function engadirElementoaoComezo(paisesEuropeos: string[]): void {
    const novoPais: string = "Cataluña";
    if (paisesEuropeos) {
        paisesEuropeos.unshift(novoPais);
        console.log("Array co novo país ao comezo:", paisesEuropeos);
    }
}
// Engade un país ao final do Array.
function engadirElementoaoFinal(paisesEuropeos: string[]): void {
    const novoPais: string = "Galicia";
    if (paisesEuropeos) {
        paisesEuropeos.push(novoPais);
        console.log("Array co novo país ao final:", paisesEuropeos);
    }
}
// Elimina un elemento ao comezo do Array e indica cal foi.
function eliminarElementoaoComezo(paisesEuropeos: string[]): void {
    if (paisesEuropeos && paisesEuropeos.length > 0) {
        var paisEliminado: string | undefined = paisesEuropeos.shift();
        console.log("Elemento eliminado ao comezo:", paisEliminado);
    } else {
        console.log("Non hai elementos para eliminar ao comezo.");
    }
}
// Elimina un elemento ao final do Array e indica cal foi.
function eliminarElementoaoFinal(paisesEuropeos: string[]): void {
    if (paisesEuropeos && paisesEuropeos.length > 0) {
        var paisEliminado: string | undefined = paisesEuropeos.pop();
        console.log("Elemento eliminado ao comezo:", paisEliminado);
    } else {
        console.log("Non hai elementos para eliminar ao comezo.");
    }
}
// Amosa o elemento que se atope na posición que che indique o usuario.
function amosarElementoIndicadoporUsuario(paisesEuropeos: string[]): void {
    const posicionPais: string | null = prompt("Indica a posición do país a amosar: ");

    if (posicionPais) {
        const posicion: number = parseInt(posicionPais);

        if (posicion > 0 && posicion <= paisesEuropeos.length) {
            const indice: number = posicion - 1;
            const pais: string = paisesEuropeos[indice];

            console.log(`O país na posición ${posicion} é ${pais}`);
        } else {
            console.log("Posición incorrecta ou array sen elementos.");
        }
    }
}
// Amosa a posición na que se atopa un elemento indicado polo usuario.
function amosarPosicionIndicadoporUsuario(paisesEuropeos: string[]): void {
    const pais: string | null = prompt("Indica o país que desexas amosar a súa posición: ");
    if (pais) {
        const posicion: number = paisesEuropeos.indexOf(pais);


        if (posicion !== -1) {
            console.log(`O país ${pais} atópase na posición ${posicion + 1}.`);
        } else {
            console.log("País incorrecto ou non atopado no array.");
        }
    }
}
// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
function amosarElementosEntrePosicions(paisesEuropeos: string[]): void {
    const posicionInicio: string | null = prompt("Indica a posición de inicio: ");
    const posicionFin: string | null = prompt("Indica a posición de fin: ");
    if (posicionFin && posicionInicio) {
        const inicio: number = parseInt(posicionInicio);
        const fin: number = parseInt(posicionFin);

        if (inicio > 0 && fin <= paisesEuropeos.length && inicio <= fin) {

            const paisesEuropeosCopia: string[] = paisesEuropeos.slice();
            const paisesSeleccionados: string[] = paisesEuropeosCopia.slice(inicio-1, fin-1);
            console.log(`Os países entre as posicións ${inicio} e ${fin} son:`);
            paisesSeleccionados.forEach((pais: string) => console.log(pais));
        } else {
            console.log("Posicións incorrectas ou array sen elementos.");
        }
    }
}
