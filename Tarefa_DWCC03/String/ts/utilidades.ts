//Función que solicita ao usuario o seu nome e apelidos nunha única petición emprgando prompt
function solicitarNomeCompletoAUsuario(): void{
    let nomeCompleto: string | null  = prompt("Introduce o ter nome e apelidos");
    //let nomeCompleto = document.getElementById("resultadoNome").innerText;
    console.log("O nome proporcionado polo usuarios: " , nomeCompleto);
    let tamanoNomeCompletoConEspacios: number = determinartamanoCadeaConEspacios(nomeCompleto);
    console.log("O tamaño do nome completo con espacios é de: ", tamanoNomeCompletoConEspacios);
    let tamanoNomeCompletoSenEspacios: number = determinartamanoCadeaSenEspacios(nomeCompleto);
    console.log("O tamaño do nome completo sen espacios é de: ", tamanoNomeCompletoSenEspacios);
    let nomeCompletoMaiusculas: string = convertirCadeaAMaiusculas(nomeCompleto);
    console.log("O nome convertido a maiusculas:",nomeCompletoMaiusculas);
    let nomeCompletoMinusculas: string = convertirCadeaAMinusculas(nomeCompleto);
    console.log("O nome convertido a minusculas",nomeCompletoMinusculas);
    let cadeaNome: string[] = separarCadea(nomeCompleto);
    console.log("A cadea separada: ",cadeaNome);
    let propostaNome: string =  devolverPorpostaNome(nomeCompleto);
    console.log("A proposta de nome é",propostaNome);
    
}

// Función que amose o tamano do nome e dos apelidos.
function determinartamanoCadeaConEspacios(cadea: string | null): number{
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    return cadea.length;

}
// Función que determine o tamano do nome e dos apelidos sen espazos.
function determinartamanoCadeaSenEspacios(cadea: string | null): number{
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    let nomeCompletoSenEspazos = cadea.split(" ").join("");
    return nomeCompletoSenEspazos.length;
}
// Función que devolva o nome e os apelidos en minúsculas.
function convertirCadeaAMinusculas(cadea: string | null): string{
    if (!cadea || !eString(cadea)) {
        return ""; 
    }
    return cadea.toLowerCase();
}

// E en maiúsculas.
function convertirCadeaAMaiusculas(cadea: string | null): string {
    if (!cadea || !eString(cadea)) {
        return ""; 
    }
    return cadea.toUpperCase();
}
// Función que amose separado Nome, Apelido1 e Apelido2.
function separarCadea(cadea: string | null): string[]{
    if (!cadea || !eString(cadea)) {
        return ["", "", ""]; 
    }
    let arraySubcadeas = cadea.split(" ");
    if(arraySubcadeas.length <1){
        return ["", "", ""];
    }
    let nome = arraySubcadeas[0] || " ";
    let apelido1=  arraySubcadeas[1] || " ";
    let apelido2=  arraySubcadeas[2] || " ";
    return [nome, apelido1, apelido2];
}

// Función que devolva se é ou non un string
function eString(cadea: any): cadea is string {
    return typeof cadea === 'string';
}
/* 
 Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/
function devolverPorpostaNome(cadea: string | null): string {
    if (!cadea || !eString(cadea)) {
        return "";
    }

    let arrayNome: string[] = separarCadea(cadea);
    let nome: string = arrayNome[0];
    let apelido1: string = arrayNome[1];
    let apelido2: string = arrayNome[2];

    let nomeProposta: string = convertirCadeaAMinusculas(nome);
    let letraApelido1: string = convertirCadeaAMaiusculas(apelido1.charAt(0)); // Obtén a primeira letra do primeiro apelido
    let letraApelido2: string = convertirCadeaAMaiusculas(apelido2.charAt(0)); // Obtén a primeira letra do segundo apelido

    let resultado: string = nomeProposta + letraApelido1 + letraApelido2;
    return resultado;
}


// Función que solicita unha contrasinal
function solicitarContrasinalAUsuario(): void {
    let contrasinalProvisional: string | null = prompt("Introduce unha contrasinal");
    let contrasinalDefinitivo: string  = "";
    
    if(validarQueTenaCaracterEspecial(contrasinalProvisional)&&(contrasinalProvisional) && validarQueTenaAlgunhaMaiuscula(contrasinalProvisional) && validarQueTenaAlgunhaMinuscula(contrasinalProvisional) && validarQueTenaAlgunNumero(contrasinalProvisional)){
         contrasinalDefinitivo = contrasinalProvisional;
         console.log("O contrasinal ingresado é:",contrasinalDefinitivo);
     } else{
        console.log("O contrasinal ingresado non é correcto");
     }
     
}
//Función que valide que o tamano sexa de entre 8 e 16 caracteres.
function validartamanoContrasinal(contrasinal: string): boolean{
    if(!contrasinal){
        return false;
    }
    if(contrasinal.length>16 || contrasinal.length <8){
        return false;
    }
    return true;
}
//Función que valide que tena algunha maiuscula.
function validarQueTenaAlgunhaMaiuscula(contrasinal: string): boolean{
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algunha maiuscula.
    return /[A-Z]/.test(contrasinal);
}
//Función que valide que tena algunha minuscula.
function validarQueTenaAlgunhaMinuscula(contrasinal: string): boolean{
    if(!contrasinal){
        return false;
    }
       // Empregase unha expresión regular para verificar se conten algunha minuscula.
       return /[a-z]/.test(contrasinal);
}
//Función que valide que tena algún número.
function validarQueTenaAlgunNumero(contrasinal: string): boolean{
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algún número.
    return /[0-9]/.test(contrasinal);
}
// Función que valide que tena algún caracter especial (_,-,@,#,$,%,&,...)
function validarQueTenaCaracterEspecial(contrasinal: string): boolean{
    if(!contrasinal){
        return false;
    }
        return /[!@#?$¿\$%\^&\*_\-]/.test(contrasinal);
}
