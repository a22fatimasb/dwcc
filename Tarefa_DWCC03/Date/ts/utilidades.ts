// Función que amose o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).
function diasRestantesParaFinDeCurso(): void {
    // Obtenemos a data actual
    const fechaActual: Date = new Date();
    // Establecemos la fecha de final de curso
    const fechaFinalDeCurso: Date = new Date("2024/6/25");

    // Calculamos a diferenza en días
    const diaMilisegundos: number = 24 * 60 * 60 * 1000; // 1 día en milisegundos
    const diasRestantes: number = Math.round((fechaFinalDeCurso.getTime() - fechaActual.getTime()) / diaMilisegundos);

    // Amosamos o resultado
    console.log(`Queda un total de ${diasRestantes} días ata o final do curso.`);
}


// Función que pida a data do teu aniversario (non fai falla o ano) e saque todos os anos no que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
function calcularFinsDeSemanaAniversario(){
    // Solicitamos ao usuario unha data de cumpreanos
    const dataAniversarioString: string | null = prompt("Introduce a data do teu cumpreanos en formato \"MM/DD\"");
    // Se dataAniversarioString é igual a null non continua a función
    if(dataAniversarioString === null){
        return;
    }
    const partesData: string[]= dataAniversarioString.split("/");
    const mesAniversario: number = parseInt(partesData[0]) - 1; 
    const diaAniversario: number = parseInt(partesData[1]);
   

    // Obtemos a data actual
    const dataActual: Date = new Date();
    const anoActual: number = dataActual.getFullYear();

    // Configuramos a data do aniversario con base na data actual
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
            console.log(`O teu aniversario en ${anoAniversario} cae en fin de semana!`);
            cantidadeFinsDeSemana++;
        }

        // Incrementamos o ano do aniversario
        anoAniversario++;
    } while (anoAniversario <= 2100);
          
    

    // Amosamos a cantidade total de fins de semana
    console.log(`O teu aniversario caerá no fin de semana un total de ${cantidadeFinsDeSemana} veces ata o 2100.`);
}

// Función que amosa a data actual en diferentes formatos segundo o valor que meta o usuario por parámetro 

function amosarDataEnFormato(): void{
    const formato: string | null = prompt("Introduce un número de formato (1, 2 ou 3):");
    if(formato === null){
        return;
    }
    const formatoUsuario: number = parseInt(formato);

    // Obtemos a data actual
    const dataActual: Date = new Date();

    // Establecemos o nome dos meses e dos días da semana en inglés e galego
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
            // Formato 1: 17/02/2016
            const formato1: string = `${diaActual}/${mesActual +1}/${anoActual}`;
            console.log(formato1);
            break;
        case 2:
            // Formato 2: Mércores, 17 de febreiro de 2016
            const formato2: string = `${DIAS_SEMANA[diaActual]}, ${numeroDiaActual} de ${MESES[mesActual]} de ${anoActual}`;
            console.log(formato2);
            break;
        case 3:
             // Formato 3: Wednesday, February 17, 2016.
            const formato3: string = `${WEEKDAYS[diaActual]}, ${MONTHS[mesActual]} ${numeroDiaActual}, ${anoActual}`;
            console.log(formato3);
            break;
        default:
            console.error("Formato non válido. Introduce un número de 1 a 3.");
}}


 // Función que amosa a hora actual en diferentes formatos segundo o valor que meta o usuario por parámetro 


function amosarHoraEnFormato(): void{
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
    // Se o valor de minutos e segundos é menor a 10 colocamos un 0 diante
    const minutosConCero: string |number = minutosActuais < 10 ? `0${minutosActuais}` : minutosActuais;
    const segundosConCero: string |number = segundosActuais <10 ? `0${segundosActuais}`: segundosActuais;
    

    switch (formatoUsuario) {
        case 1:
            // Formato 1: 14:35:07 (hora detallada con minutos e segundos)
            const formato1: string = `${horaActual}:${minutosConCero}:${segundosConCero}`;
            console.log(formato1);
            break;
        case 2:
             // Formato 2: 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes ou despois de mediodía).
            const formato2: string = `0${(horaActual % 12) || 12}:${minutosConCero} ${horaActual < 12 ? 'AM' : 'PM'}`;
            console.log(formato2);
            break;
      
        default:
            console.error("Formato non válido. Introduce os números 1 ou 2.");
    }
}
