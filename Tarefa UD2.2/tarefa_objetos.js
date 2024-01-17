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
  nome_disco;
  grupo_cantante;
  ano_publicacion;
  tipo_musica;
  prestado;

  // un constructor
  constructor(
    nome_disco,
    grupo_cantante,
    ano_publicacion,
    tipo_musica,
    prestado
  ) {
    this.nome_disco = nome_disco;
    this.grupo_cantante = grupo_cantante;
    this.ano_publicacion = ano_publicacion;
    this.tipo_musica = tipo_musica;
    this.prestado = prestado;
  }

  // Un sistema de carga de datos dun disco (a parte do construtor).
  sistema_de_carga_disco(nome, grupo, ano, tipo, prestado) {
    this.nome_disco = nome;
    this.grupo_cantante = grupo;
    this.ano_publicacion = ano;
    this.tipo_musica = tipo;
    this.prestado = prestado;
  }

  // Amosar toda a información dun disco.
  amosar_informacion() {
    return `El disco con nombre ${this.nome_disco} es del autor/es ${
      this.grupo_cantante
    }, es del año ${this.ano_publicacion}. El tipo de música es ${
      this.tipo_musica
    }. Prestado: ${this.prestado ? "Si" : "Non"}`;
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

discos.forEach((disco) => {
  console.log(disco.amosar_informacion());
});
