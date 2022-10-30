/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor.*/

//ingreso de datos a la matriz
var registros = [
  {
    nombre: "Arturo",
    edad: 16,
  },
  {
    nombre: "Marta",
    edad: 30,
  },
  {
    nombre: "Santiago",
    edad: 18,
  },
  {
    nombre: "Ximena",
    edad: 14,
  },
  {
    nombre: "Oscar",
    edad: 50,
  },
  {
    nombre: "Octavio",
    edad: 75,
  },
  {
    nombre: "Sofia",
    edad: 80,
  },
  {
    nombre: "Manuela",
    edad: 10,
  },
  {
    nombre: "Rafael",
    edad: 29,
  },
  {
    nombre: "Daniela",
    edad: 32,
  },
];

//mostrar elementos de la matriz
console.log(registros);
// mayores de edad
var mayorEdad = registros.filter((persona) => persona.edad >= 18);
console.log(mayorEdad.length);
console.log(mayorEdad);
//menores de edad
var menorEdad = registros.filter((persona) => persona.edad <= 18);
console.log(menorEdad.length);
console.log(menorEdad);
//Adultos Mayores
var adultosMayores = registros.filter((persona) => persona.edad >= 60);
console.log(adultosMayores.length);
console.log(adultosMayores);
//mayor Edad y menor Edad
var edades = [];

for (var i = 0; i < registros.length; i++) {
  edades.push(registros[i].edad);
}

console.log(edades);

var edadMinima = Math.min(...edades);
var edadMaxima = Math.max(...edades);

console.log(edadMinima);
console.log(edadMaxima);
//Promedio de las edades
var sum = edades.reduce((a, n) => ((a += n), a), 0);
var promedio = sum / edades.length;
console.log(promedio);
