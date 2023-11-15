//Función que solicita ao usuario o seu nome e apelidos nunha única petición emprgando prompt
function solicitarNomeCompletoAUsuario(){
    let nomeCompleto = prompt("Introduce o ter nome e apelidos");
    console.log("O nome proporcionado polo usuarios: " , nomeCompleto);
    let tamanoNomeCompletoConEspacios = determinartamanoCadeaConEspacios(nomeCompleto);
    console.log("O tamaño do nome completo con espacios é de: ", tamanoNomeCompletoConEspacios);
    let tamanoNomeCompletoSenEspacios = determinartamanoCadeaSenEspacios(nomeCompleto);
    console.log("O tamaño do nome completo sen espacios é de: ", tamanoNomeCompletoSenEspacios);
    let nomeCompletoMaiusculas = convertirCadeaAMaiusculas(nomeCompleto);
    console.log("O nome convertido a maiusculas:",nomeCompletoMaiusculas);
    let nomeCompletoMinusculas = convertirCadeaAMinusculas(nomeCompleto);
    console.log("O nome convertido a minusculas",nomeCompletoMinusculas);
    let cadeaNome = separarCadea(nomeCompleto);
    console.log("A cadea separada: ",cadeaNome);
    let propostaNome =  devolverPorpostaNome(nomeCompleto);
    console.log("A proposta de nome é",propostaNome);
    
}

// Función que amose o tamano do nome e dos apelidos.
function determinartamanoCadeaConEspacios(cadea){
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    return cadea.length;

}
// Función que determine o tamano do nome e dos apelidos sen espazos.
function determinartamanoCadeaSenEspacios(cadea){
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    //Eliminamos todo tipo de espazos que haxa no string
    let nomeCompletoSenEspazos = cadea.split(" ").join("");
    return nomeCompletoSenEspazos.length;
}
// Función que devolva o nome e os apelidos en minúsculas.
function convertirCadeaAMinusculas(cadea){
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    return cadea.toLowerCase();
}

// E en maiúsculas.
function convertirCadeaAMaiusculas(cadea){
    if (!cadea || !eString(cadea)) {
        return 0; 
    }
    return cadea.toUpperCase();
}
// Función que amose separado Nome, Apelido1 e Apelido2.
function separarCadea(cadea){
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
function eString(cadea) {
    return typeof cadea === 'string';
}
/* 
 Unha proposta de nome de usuario co nome en minúsculas, a incial do
primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR*/

function devolverPorpostaNome(cadea) {
    if (!cadea || !eString(cadea)) {
        return 0;
    }

    let arrayNome = separarCadea(cadea);
    let nome = arrayNome[0];
    let apelido1 = arrayNome[1];
    let apelido2 = arrayNome[2];

    let nomeProposta = convertirCadeaAMinusculas(nome);
    let letraApelido1 = convertirCadeaAMaiusculas(apelido1.charAt(0)); // Collemos a primeira letra do primeiro apelido
    let letraApelido2 = convertirCadeaAMaiusculas(apelido2.charAt(0)); // Collemos a primeira letra do segundo apelido

    let resultado = nomeProposta + letraApelido1 + letraApelido2;
    return resultado;
}


// Función que solicita unha contrasinal
function solicitarContrasinalAUsuario(){
    let contrasinalProvisional = prompt("Introduce unha contrasinal");
    let contrasinalDefinitivo = "";
    
    if(validarQueTenaCaracterEspecial(contrasinalProvisional)&&validartamanoContrasinal(contrasinalProvisional) && validarQueTenaAlgunhaMaiuscula(contrasinalProvisional) && validarQueTenaAlgunhaMinuscula(contrasinalProvisional) && validarQueTenaAlgunNumero(contrasinalProvisional)){
         contrasinalDefinitivo = contrasinalProvisional;
         console.log("O contrasinal ingresado é:",contrasinalDefinitivo);
     } else{
        console.log("O contrasinal ingresado non é correcto");
     }
     
}
//Función que valide que o tamano sexa de entre 8 e 16 caracteres.
function validartamanoContrasinal(contrasinal){
    if(!contrasinal){
        return false;
    }
    if(contrasinal.length>16 || contrasinal.length <8){
        return false;
    }
    return true;
}
//Función que valide que tena algunha maiuscula.
function validarQueTenaAlgunhaMaiuscula(contrasinal){
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algunha maiuscula.
    return /[A-Z]/.test(contrasinal);
}
//Función que valide que tena algunha minuscula.
function validarQueTenaAlgunhaMinuscula(contrasinal){
    if(!contrasinal){
        return false;
    }
       // Empregase unha expresión regular para verificar se conten algunha minuscula.
       return /[a-z]/.test(contrasinal);
}
//Función que valide que tena algún número.
function validarQueTenaAlgunNumero(contrasinal){
    if(!contrasinal){
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algún número.
    return /[0-9]/.test(contrasinal);
}
// Función que valide que tena algún caracter especial (_,-,@,#,$,%,&,...)
function validarQueTenaCaracterEspecial(contrasinal){
    if(!contrasinal){
        return false;
    }
        return /[!@#?$¿\$%\^&\*_\-]/.test(contrasinal);
}
