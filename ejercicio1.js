/*Desarrollar un programa que permita calcular el área o perímetro de algunas 
figuras planas según la siguiente tabla:*/

//PARA EJECUTAR EL PROGRAMA UTILICE EL ARCHIVO HTML ADJUNTO

//Area y Perimetro del triangulo

alert("Cálculo del Perímetro de un Triangulo");

var ladoa, ladob, ladoc, p_triangulo;

ladoa = parseInt(prompt("Por favor ingrese el primer lado del triangulo"));
ladob = parseInt(prompt("Por favor ingrese el segundo lado del triangulo"));
ladoc = parseInt(prompt("Por favor ingrese el tercer lado del triangulo"));

p_triangulo = ladoa + ladob + ladoc;

alert("El Perimetro del Triangulo es " + p_triangulo + " unidades");

alert("Cálculo del Area de un Triangulo");

var altoTriangulo, baseTriangulo, a_triangulo;

altoTriangulo = parseInt(prompt("Por favor ingrese el Alto del Triangulo"));
baseTriangulo = parseInt(prompt("por favor ingrese la Base del Triangulo"));

a_triangulo = (altoTriangulo * baseTriangulo) / 2;

alert("El Area del Triangulo es " + a_triangulo + " unidades");

//Area y perimetro del rectangulo

alert("Cálculo del Perímetro y el Area de un Rectangulo");

var ladoArec, ladoBrec, p_rectangulo, a_rectangulo;

ladoArec = parseInt(prompt("Por favor ingrese un lado a del Rectangulo"));
ladoBrec = parseInt(prompt("Por favor ingrese un lado b del Rectangulo"));

p_rectangulo = ladoArec * 2 + ladoBrec * 2;
a_rectangulo = ladoArec * ladoBrec;

alert(
  "El Perímetro del Rectangulo es: " +
    p_rectangulo +
    " unidades, el Area del Rectangulo es: " +
    a_rectangulo +
    " unidades."
);

//Area y perimetro de un cuadrado

alert("Cálculo del Area y el Perímetro de un cuadrado");

var a, a_cuadrado, p_cuadrado;

a = parseInt(prompt("Por favor ingrese el lado del Cuadrado"));

a_cuadrado = Math.pow(a, 2);
p_cuadrado = a * 4;

alert(
  "El Perímetro del Cuadrado es: " +
    p_cuadrado +
    " unidades, el Area del Cuadrado es: " +
    a_cuadrado +
    " unidades."
);

//Area y perímetro de un circulo

alert("Cálculo del Area y del Perímetro de un Círculo");

var r, p_circulo, a_circulo;

r = parseInt(prompt("Por favor ingrese el Radio del Círculo"));

p_circulo = 2 * Math.PI * Math.pow(r, 2);
a_circulo = Math.PI * Math.pow(r, 2);

alert(
  "El Perímetro del Circulo es: " +
    p_circulo +
    " unidades, el Area del Círculo es: " +
    a_circulo +
    " unidades."
);

//resumen en pagina

document.write(
  "<h1>Resumen de valores ingresados por el usuario y resultados.</h1>" +
    "<br/>"
);
document.write("<h2>Cálculo del Perímetro de un Triangulo</h2>" + "<br/>");
document.write("<h3>Primer lado del triangulo: </h3>" + ladoa + "<br/>");
document.write("<h3>Segundo lado del triangulo: </h3>" + ladob + "<br/>");
document.write("<h3>Tercer lado del triangulo: </h3>" + ladoc + "<br/>");
document.write("<h3>Perimetro del triangulo: </h3>" + p_triangulo + "<br/>");
document.write("<h2>Cálculo del Area de un Triangulo</h2>" + "<br/>");
document.write("<h3>Alto del triangulo: </h3>" + altoTriangulo + "<br/>");
document.write("<h3>Base del triangulo: </h3>" + baseTriangulo + "<br/>");
document.write("<h3>Area del triangulo: </h3>" + a_triangulo + "<br/>");
document.write(
  "<h2>Cálculo del Area y del Perímetro de un Rectángulo</h2>" + "<br/>"
);
document.write("<h3>primer lado del rectangulo: </h3>" + ladoArec + "<br/>");
document.write("<h3>Segundo lado del rectangulo: </h3>" + ladoBrec + "<br/>");
document.write("<h3>Perimetro del rectangulo: </h3>" + p_rectangulo + "<br/>");
document.write("<h3>Area del rectangulo: </h3>" + a_rectangulo + "<br/>");
document.write(
  "<h2>Cálculo del Area y del Perímetro de un Cuadrado</h2>" + "<br/>"
);
document.write("<h3>Lado del cuadrado: </h3>" + a + "<br/>");
document.write("<h3>Perimetro del cuadrado: </h3>" + p_cuadrado + "<br/>");
document.write("<h3>Area del cuadrado: </h3>" + a_cuadrado + "<br/>");
document.write(
  "<h2>Cálculo del Area y del Perímetro de un Círculo</h2>" + "<br/>"
);
document.write("<h3>Radio del círculo: </h3>" + r + "<br/>");
document.write("<h3>Perimetro del círculo: </h3>" + p_circulo + "<br/>");
document.write("<h3>Area del círculo: </h3>" + a_circulo + "<br/>");
