// Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).
function diasRestantesParaFinDeCurso(): void {
    // Obtenemos la fecha actual
    const fechaActual: Date = new Date();
    // Establecemos la fecha de final de curso
    const fechaFinalDeCurso: Date = new Date("2024/7/25");

    // Calculamos la diferencia en días
    const unDiaEnMilisegundos: number = 24 * 60 * 60 * 1000; // 1 día en milisegundos
    const diasRestantes: number = Math.round((fechaFinalDeCurso.getTime() - fechaActual.getTime()) / unDiaEnMilisegundos);

    // Mostramos el resultado
    console.log(`Quedan ${diasRestantes} días hasta el final del curso.`);
}


// Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
function calcularFinsDeSemanaAniversario(){
    const dataAniversarioString: string | null = prompt("Introduce a data do teu cumpreanos en formato \"MM/DD\"");
    if(dataAniversarioString === null){
        return;
    }
    const partesData: string[]= dataAniversarioString.split("/");
    const mesAniversario: number = parseInt(partesData[0]) - 1; 
    const diaAniversario: number = parseInt(partesData[1]);
   

    // Obtemos a data actual
    const dataActual: Date = new Date();
    const anoActual: number = dataActual.getFullYear();

    // Configuramos a data do teu aniversario con base na data actual
    const dataAniversarioEsteAno: Date = new Date(anoActual, mesAniversario, diaAniversario);

    // Inicializamos a cantidade de fins de semana
    let cantidadeFinsDeSemana: number = 0;
    let anoAniversario: number = anoActual;
    // Bucle desde o ano actual ata o ano 2100
    do {
        // Configuramos a data do teu aniversario para este ano
        dataAniversarioEsteAno.setFullYear(anoAniversario);

        // Comprobamos se o día do aniversario cae en fin de semana (0 é domingo, 6 é sábado)
        const diaSemanaAniversario: number = dataAniversarioEsteAno.getDay();
        if (diaSemanaAniversario === 0 || diaSemanaAniversario === 6) {
            console.log(`O teu aniversario en ${anoActual} cae en fin de semana!`);
            cantidadeFinsDeSemana++;
        }

        // Incrementamos o ano do aniversario
        anoAniversario++;
    } while (anoAniversario <= 2100);
   
        
    

    // Amosamos a cantidade total de fins de semana
    console.log(`O teu aniversario caerá no fin de semana un total de ${cantidadeFinsDeSemana} veces ata o 2100.`);
}

/*
Amosa a data actual en diferentes formatos segundo o valor que meta o
usuario por parámetro (usa un switch):
*/

function amosarDataEnFormato(): void{
    const formato: string | null = prompt("Introduce un número de formato (1, 2) ou 3:");
    if(formato === null){
        return;
    }
    const formatoUsuario: number = parseInt(formato);

    // Obtemos a data actual
    const dataActual: Date = new Date();

    const MESES: string[]  = [
        "Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo",
        "Agosto", "Setembro", "Outubro", "Novembro", "Decembro",
      ];
    const MONTHS: string[]  = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
      ];
      const DIAS_SEMANA: string[]  = [
        "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado", "Domingo"
      ];
      
      const WEEKDAYS: string[]  = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ];

      const diaActual: number = dataActual.getDay();
      const numeroDiaActual: number = dataActual.getDate();
      const mesActual: number = dataActual.getMonth();
      const anoActual: number = dataActual.getFullYear();

    switch (formatoUsuario) {
        case 1:
            // 17/02/2016
            const formato1: string = `${diaActual}/${mesActual +1}/${anoActual}`;
            console.log(formato1);
            break;
        case 2:
            // Mércores, 17 de febreiro de 2016
            const formato2: string = `${DIAS_SEMANA[diaActual]}, ${numeroDiaActual} de ${MESES[mesActual]} de ${anoActual}`;
            console.log(formato2);
            break;
        case 3:
            // Wednesday, February 17, 2016.
            const formato3: string = `${WEEKDAYS[diaActual]}, ${MONTHS[mesActual]} ${numeroDiaActual}, ${anoActual}`;
            console.log(formato3);
            break;
        default:
            console.error("Formato non válido. Introduce un número de 1 a 3.");
}}

/* 
 Amosa a hora actual en diferentes formatos segundo o valor que meta o
usuario por parámetro (usa un switch): 
*/

function amosarHoraEnFormato(){
    const formato: string | null = prompt("Introduce un número de formato (1 ou 2):");
    if(formato === null){
        return;
    }
    const formatoUsuario: number = parseInt(formato);
    // Obtemos a data actual
    const dataActual: Date = new Date();

    
    const horaActual: number = dataActual.getHours();
    const minutosActuais: number = dataActual.getMinutes();
    const segundosActuais: number = dataActual.getSeconds();

    switch (formatoUsuario) {
        case 1:
            // 14:35:07 (hora detallada con minutos e segundos)
            const formato1: string = `${horaActual}:${minutosActuais}:${segundosActuais}`;
            console.log(formato1);
            break;
        case 2:
            // 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes ou despois de mediodía).
            const formato2: string = `${(horaActual % 12) || 12}:${minutosActuais} ${horaActual < 12 ? 'AM' : 'PM'}`;
            console.log(formato2);
            break;
      
        default:
            console.error("Formato non válido. Introduce os números 1 ou 2.");
    }
}
