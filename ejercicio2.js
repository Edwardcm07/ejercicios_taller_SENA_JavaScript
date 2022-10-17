/*Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor.*/

var registros = [
  ["Juan", 16],
  ["Pedro", 18],
  ["Maria", 35],
  ["José", 40],
  ["Cecilia", 20],
  ["Arturo", 80],
  ["Marcos", 65],
  ["Adolfo", 50],
  ["Victor", 49],
  ["Sofia", 70],
];

var total = 0;
for (var i = 0; i < registros.length; i++) {
  console.log(registros[i]);
  for (var j = 0; registros[i].length; j++) {
    console.log(" " + registros[i][j] + "<br/>");
  }
}
