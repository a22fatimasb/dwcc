//Función que solicita ao usuario o seu nome e apelidos nunha única petición emprgando prompt
function solicitarNomeCompletoAUsuario() {
    var nomeCompleto = prompt("Introduce o ter nome e apelidos");
    //let nomeCompleto = document.getElementById("resultadoNome").innerText;
    console.log("O nome proporcionado polo usuarios: ", nomeCompleto);
    var tamanoNomeCompletoConEspacios = determinartamanoCadeaConEspacios(nomeCompleto);
    console.log("O tamaño do nome completo con espacios é de: ", tamanoNomeCompletoConEspacios);
    var tamanoNomeCompletoSenEspacios = determinartamanoCadeaSenEspacios(nomeCompleto);
    console.log("O tamaño do nome completo sen espacios é de: ", tamanoNomeCompletoSenEspacios);
    var nomeCompletoMaiusculas = convertirCadeaAMaiusculas(nomeCompleto);
    console.log("O nome convertido a maiusculas:", nomeCompletoMaiusculas);
    var nomeCompletoMinusculas = convertirCadeaAMinusculas(nomeCompleto);
    console.log("O nome convertido a minusculas", nomeCompletoMinusculas);
    var cadeaNome = separarCadea(nomeCompleto);
    console.log("A cadea separada: ", cadeaNome);
    var propostaNome = devolverPorpostaNome(nomeCompleto);
    console.log("A proposta de nome é", propostaNome);
}
// Función que amose o tamano do nome e dos apelidos.
function determinartamanoCadeaConEspacios(cadea) {
    if (!cadea || !eString(cadea)) {
        return 0;
    }
    return cadea.length;
}
// Función que determine o tamano do nome e dos apelidos sen espazos.
function determinartamanoCadeaSenEspacios(cadea) {
    if (!cadea || !eString(cadea)) {
        return 0;
    }
    var nomeCompletoSenEspazos = cadea.split(" ").join("");
    return nomeCompletoSenEspazos.length;
}
// Función que devolva o nome e os apelidos en minúsculas.
function convertirCadeaAMinusculas(cadea) {
    if (!cadea || !eString(cadea)) {
        return "";
    }
    return cadea.toLowerCase();
}
// E en maiúsculas.
function convertirCadeaAMaiusculas(cadea) {
    if (!cadea || !eString(cadea)) {
        return "";
    }
    return cadea.toUpperCase();
}
// Función que amose separado Nome, Apelido1 e Apelido2.
function separarCadea(cadea) {
    if (!cadea || !eString(cadea)) {
        return ["", "", ""];
    }
    var arraySubcadeas = cadea.split(" ");
    if (arraySubcadeas.length < 1) {
        return ["", "", ""];
    }
    var nome = arraySubcadeas[0] || " ";
    var apelido1 = arraySubcadeas[1] || " ";
    var apelido2 = arraySubcadeas[2] || " ";
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
        return "";
    }
    var arrayNome = separarCadea(cadea);
    var nome = arrayNome[0];
    var apelido1 = arrayNome[1];
    var apelido2 = arrayNome[2];
    var nomeProposta = convertirCadeaAMinusculas(nome);
    var letraApelido1 = convertirCadeaAMaiusculas(apelido1.charAt(0)); // Obtén a primeira letra do primeiro apelido
    var letraApelido2 = convertirCadeaAMaiusculas(apelido2.charAt(0)); // Obtén a primeira letra do segundo apelido
    var resultado = nomeProposta + letraApelido1 + letraApelido2;
    return resultado;
}
// Función que solicita unha contrasinal
function solicitarContrasinalAUsuario() {
    var contrasinalProvisional = prompt("Introduce unha contrasinal");
    var contrasinalDefinitivo = "";
    if (validarQueTenaCaracterEspecial(contrasinalProvisional) && (contrasinalProvisional) && validarQueTenaAlgunhaMaiuscula(contrasinalProvisional) && validarQueTenaAlgunhaMinuscula(contrasinalProvisional) && validarQueTenaAlgunNumero(contrasinalProvisional)) {
        contrasinalDefinitivo = contrasinalProvisional;
        console.log("O contrasinal ingresado é:", contrasinalDefinitivo);
    }
    else {
        console.log("O contrasinal ingresado non é correcto");
    }
}
//Función que valide que o tamano sexa de entre 8 e 16 caracteres.
function validartamanoContrasinal(contrasinal) {
    if (!contrasinal) {
        return false;
    }
    if (contrasinal.length > 16 || contrasinal.length < 8) {
        return false;
    }
    return true;
}
//Función que valide que tena algunha maiuscula.
function validarQueTenaAlgunhaMaiuscula(contrasinal) {
    if (!contrasinal) {
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algunha maiuscula.
    return /[A-Z]/.test(contrasinal);
}
//Función que valide que tena algunha minuscula.
function validarQueTenaAlgunhaMinuscula(contrasinal) {
    if (!contrasinal) {
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algunha minuscula.
    return /[a-z]/.test(contrasinal);
}
//Función que valide que tena algún número.
function validarQueTenaAlgunNumero(contrasinal) {
    if (!contrasinal) {
        return false;
    }
    // Empregase unha expresión regular para verificar se conten algún número.
    return /[0-9]/.test(contrasinal);
}
// Función que valide que tena algún caracter especial (_,-,@,#,$,%,&,...)
function validarQueTenaCaracterEspecial(contrasinal) {
    if (!contrasinal) {
        return false;
    }
    return /[!@#?$¿\$%\^&\*_\-]/.test(contrasinal);
}
