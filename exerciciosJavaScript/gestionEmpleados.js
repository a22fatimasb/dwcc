/*Crea un sistema de gestión de empleados que utilice clases para representar diferentes tipos de empleados en una empresa. Implementa herencia para compartir comportamientos comunes entre los distintos tipos de empleados.

Requisitos:
Debe haber una clase base llamada Empleado que contenga las propiedades comunes a todos los empleados, como nombre, apellido, edad y salario.
Debe haber al menos dos clases hijas que hereden de Empleado: EmpleadoTiempoCompleto y EmpleadoTiempoParcial.
La clase EmpleadoTiempoCompleto debe incluir una propiedad adicional horasExtra que represente las horas extra trabajadas por semana.
La clase EmpleadoTiempoParcial debe incluir una propiedad adicional horasPorSemana que represente las horas trabajadas por semana.
Implementa un método en cada clase para calcular el salario total de un empleado. Para los empleados a tiempo completo, el salario total debe incluir 
el salario base más las horas extra trabajadas, mientras que para los empleados a tiempo parcial, el salario total debe basarse únicamente en las horas
trabajadas por semana.
Crea instancias de ambas clases y demuestra el funcionamiento del sistema mostrando el salario total de cada empleado.*/

class Empleado{
    nombre;
    apellido;
    edad;
    salario;

    constructor(nombre, apellido, edad, salario)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.salario = salario;
    }

    salarioTotal(){
        return this.salario;
    }
}

class EmpleadoTiempoCompleto extends Empleado{
    horasExtra;
    constructor(nombre, apellido, edad, salario, horasExtra){
        super(nombre, apellido, edad, salario);
        this.horasExtra = horasExtra;
    }
    salarioTotal(){
        return this.salario * this.horasExtra;
    }
}

class EmpleadoTiempoParcial extends Empleado{
    horasPorSemana;
    constructor(nombre, apellido, edad, salario, horasPorSemana){
        super(nombre, apellido, edad, salario);
        this.horasPorSemana = horasPorSemana;
    }
    salarioTotal(){
        return this.salario * this.horasPorSemana;
    }
}
// Crear un empleado a tiempo completo
const empleadoCompleto = new EmpleadoTiempoCompleto("Juan", "García", 30, 2000, 5);
console.log("Salario total del empleado a tiempo completo:", empleadoCompleto.salarioTotal());

// Crear un empleado a tiempo parcial
const empleadoParcial = new EmpleadoTiempoParcial("María", "López", 25, 15, 20);
console.log("Salario total del empleado a tiempo parcial:", empleadoParcial.salarioTotal());
