/*
Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• Táboa de multiplicar do 9.
• 10 primeiros números da sucesión de Fibonacci.
• Indicar se un número é primo ou non. A entrada de datos podes facela como queiras
(prompt, fixa,...)
Utilizar os tres tipos de bucles que se viron nos contidos. Podes escoller o que che resulte máis
axeitado para cada punto pero deberán ser diferentes, non repetir en ningún caso.

*/

// Táboa de multiplicar do 9

const NUMERO: number = 9;

for(let i: number = 1; i<11; i++){
    const resultado: number = i * NUMERO;
    console.log(`${NUMERO}  * ${i} = ${resultado}`);
}


// 10 primeiros números da sucesión de Fibonacci.

let num: number = 0 ;
let contador: number = 0;
let num2: number = 1;
let num_temporal: number = 0;

while (contador <11){
    contador ++;
    console.log(num + ",");
    num_temporal = num;
    num = num2;
    num2 = num_temporal + num;
}

//Indicar se un número é primo ou non. 
let v1: number = 1;

do{
if(v1 % 2 === 0){
    console.log(`O número ${v1} é primo.`);
} else{
    console.log(`O número ${v1} non é primo.`);
}

v1++;
}while(v1<10);

/* Crea un programa que pida ao usuario que introduza unha idade e amose a seguinte mensaxe en
función do número introducido:
• 0-12: neno
• 13-18: adolescente
• 19-30: xoven
• 31-64: adulto
• 65-100: xubilado
Controla os casos de erro tamén.
Para gardar un valor do usuario utilizamos o seguinte comando: prompt
Faino con if/else e con switch/case tamén
*/

let idade: number = parseInt(window.prompt("Cal é a tua idade"));

// Con switch/case
if(!isNaN(idade)){
    switch (true){
        case (idade >=0 && idade <=12):
            console.log("Neno");
            break;
        case (idade >=13 && idade <=18):
            console.log("Adolescente");
            break;
        case (idade >=18 && idade <=30):
            console.log("Xoven");
            break;
        case (idade >=31 && idade <=64):
            console.log("Adulto");
            break;
        case (idade >=65 && idade <=100):
            console.log("Xubilado");
            break;
        default:
            console.log("Idade fora do rango especificado.");
            break;
    }
} else {
    console.log("Por favor, introduce unha idade válida.");
}

//  Con if/else 

/*

if(!isNaN(idade)){
    if(idade >=0 && idade <=12){
            console.log("Neno");
    }else if(idade >=13 && idade <=18){
            console.log("Adolescente");
    } else if (idade >=18 && idade <=30){ 
        console.log("Xoven");
    } else if(idade >=31 && idade <=64){
        console.log("Adulto");
    } else if (idade >=65 && idade <=100){  
        console.log("Xubilado");
    } else{
        console.log("Idade fora do rango especificado.");
    }
            
} else {
    console.log("Por favor, introduce unha idade válida.");
}

*/
/*Tendo en conta que cando desprazamos 1 bit á dereita facemos a división enteira por 2 e cando o
desprazamos á esquerda estamos multiplicando por 2, imprime tamén o resultado das seguintes
operacións empregando desprazamento de bits. Podes mesturar operadores de asignación e tamén
operadores propios de bit a bit.
• 125 / 8
• 40 x 4
• 25 / 2
• 10 x 16
*/

let division: number = 125 >> 3;
console.log(division);
let multiplicacion: number = 40 << 2;
console.log(multiplicacion);
let division2: number = 25 >> 1;
console.log(division2);
let multiplicacion2: number = 10 << 4;
console.log(multiplicacion2);

