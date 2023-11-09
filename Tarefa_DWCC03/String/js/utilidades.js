//Función que solicita ao usuario o seu nome e apelidos nunha única petición emprgando prompt
function solicitarNomeCompletoAUsuario(){
    let nomeCompleto = prompt("Introduce o ter nome e apelidos");
    return nomeCompleto;
}

// Función que amose o tamaño do nome e dos apelidos.
function determinarTamañoCadeaConEspacios(cadea){
    if (!cadea || eString(cadea)) {
        return 0; 
    }
    return cadea.length;

}
// Función que determine o tamaño do nome e dos apelidos sen espazos.
function determinarTamañoCadeaSenEspacios(cadea){
    if (!cadea || eString(cadea)) {
        return 0; 
    }
    let nomeCompletoSenEspazos = cadea.trim();
    return nomeCompletoSenEspazos.length;
}
// Función que devolva o nome e os apelidos en minúsculas.
function convertirCadeaAMinusculas(cadea){
    if (!cadea || eString(cadea)) {
        return 0; 
    }
    return cadea.toLowerCase();
}

// E en maiúsculas.
function convertirCadeaAMaiusculas(cadea){
    if (!cadea || eString(cadea)) {
        return 0; 
    }
    return cadea.toUpperCase();
}
// Función que amose separado Nome, Apelido1 e Apelido2.
function separarCadea(cadea){
    if (!cadea || eString(cadea)) {
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
function eString(cadea) {
    return typeof cadea === 'string';
}
/* 
 Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/
function devolverPorpostaNome(cadea){
    if (!cadea || eString(cadea)) {
        return 0; 
    }
    let arrayNome= separarCadea(cadea);
    let nome = arrayNome[0] ;
    let apelido1=  arrayNome[1] ;
    let apelido2=  arrayNome[2];
    let nomeProposta = convertirCadeaAMinusculas(nome);
    let letraApelido1 = convertirCadeaAMaiusculas(apelido1.charAt[0]);
    let letraApelido2 = convertirCadeaAMaiusculas(apelido2.charAt[0]);
    let resultado = nomeProposta.concat(letraApelido1, letraApelido2);
    return resultado;


}


// Función que solicita unha contrasinal
function solicitarContrasinalAUsuario(){
    let contrasinal = prompt("Introduce unha contrasinal");
    return contrasinal;
}
//Función que valide que o tamaño sexa de entre 8 e 16 caracteres.
function validarTamañoContrasinal(contrasinal){
    if(!contrasinal){
        return false;
    }
    if(contrasinal.length>16 || contrasinal.length <8){
        return false;
    }
    return true;
}
//Función que valide que teña algunha maiuscula.
function validarQueTeñaAlgunhaMaiuscula(contrasinal){
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algunha maiuscula.
    return /[A-Z]/.test(contrasinal);
}
//Función que valide que teña algunha minuscula.
function validarQueTeñaAlgunhaMinuscula(contrasinal){
    if(!contrasinal){
        return false;
    }
       // Empregase unha expresión regular para verificar se conten algunha minuscula.
       return /[a-z]/.test(contrasinal);
}
//Función que valide que teña algún número.
function validarQueTeñaAlgunNumero(contrasinal){
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algún número.
    return /[0-9]/.test(contrasinal);
}
// Función que valide que teña algún caracter especial (_,-,@,#,$,%,&,...)
function validarQueTeñaCaracterEspecial(contrasinal){
    if(!contrasinal){
        return false;
    }
        return /[!@#?$¿\$%\^&\*_\-]/.test(contrasinal);
}
