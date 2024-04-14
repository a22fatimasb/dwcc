class Animal{
    nombre;
    genero;

    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby", "Macho");

console.log(mimi);
console.log(scooby);
mimi.sonar();

class Perro extends Animal{
    tamanio;
    constructor(nombre,genero,tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    }
}