/*Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego
produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 
3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. 
Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando
los datos de forma ascendente.*/
var array1 = [];
var array2 = [];
numArray1 = 0;
numArray2 = 0;
//ingresar valores al array1
do {
  numArray1 = prompt("Por favor ingrese un numero para el primer array ");
  array1.push(numArray1);
} while (array1.length < 5);

console.log(array1);
//ingresar valores al array2
do {
  numArray2 = prompt("Por favor ingrese un numero para el segundo array ");
  array2.push(numArray2);
} while (array2.length < 5);

console.log(array2);
//sumar o concatenar los dos Arrays
var sumaArrays = array1.concat(array2);
//ordenar los arrays
sumaArrays.sort(function (a, b) {
  return a - b;
});
//mostrar resultado
console.log(sumaArrays);
