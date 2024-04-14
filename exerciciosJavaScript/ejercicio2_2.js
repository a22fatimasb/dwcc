/* 
 Necesitamos almacenar nun programa todos os discos de música que temos na casa.
Crea un obxecto “disco” que almacene a seguinte información:
● Nome do disco.
● Grupo de música ou cantante.
● Ano de publicación.
● Tipo de música (rock, pop, jazz, folk, k-pop,...).
● Prestado: si ou non (booleano).
Ademais deberemos implementar os seguintes métodos:
● Un construtor.
● Un sistema de carga de datos dun disco (a parte do construtor).
● Amosar toda a información dun disco.
● Amosar todos os discos (pódense utilizar Arrays).
 */

class Disco {
    nome;
    autor;
    ano_publicacion;
    tipo_musica;
    prestado;
    constructor(nome, autor, ano_publicacion, tipo_musica, prestado){
        this.autor = autor;
        this.nome = nome;
        this.ano_publicacion = ano_publicacion;
        this.tipo_musica = tipo_musica;
        this.prestado = prestado;
    }
    sistema_de_carga_disco(nome, autor, ano_publicacion, tipo_musica, prestado){
        this.autor = autor;
        this.nome = nome;
        this.ano_publicacion = ano_publicacion;
        this.tipo_musica = tipo_musica;
        this.prestado = prestado;
    }
    amosar_informacion(){
        return `O ${this.nome} do autor ou grupo ${this.autor} foi publicaco no ano ${this.ano_publicacion}.\n 
        Pertence ao xénero musical ${this.tipo_musica} e actualmente atopase en ${this.prestado ? 'prestado' : 'dispoñible'}`;
    }
}

let discos = [];
let disco1 = new Disco("Infinito", "Enrique Bunbury", 2002, "Rock", true);
let disco2 = new Disco("Xabón Lagarta", "A banda da loba", 2022, "Pop", false);
let disco3 = new Disco("Diante do Eco", "Ses", 2022, "Folk",true);
let disco4 = new Disco();
disco4.sistema_de_carga_disco("Diluvio", "Tanxugueiras", 2022, "Folck", false);

discos.push(disco1);
discos.push(disco2);
discos.push(disco3);
discos.push(disco4);

console.log("Amosar toda a información dun disco:")
console.log(disco2.amosar_informacion());

console.log("Amosar toda a información de todos os discos:")
discos.forEach(disco => console.log(disco.amosar_informacion()));