/*Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia, 
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá mostrar un menú que permite las siguientes opciones: 
  
a. Agregar una persona con los datos que se listan anteriormente. 
b. Mostrar la información personal de una persona particular por medio de su posición en el vector.*/

let registro = [
  {
    nombre: "Manuela",
    cedula: "1234567890",
    fn: "30-10-1990",
    correo: "manu@gmail.com",
    ciudad: "Medellín",
    artista: "Daddy Yankee",
    cancion1: "La santa",
    cancion2: "Gasolina",
    cancion3: "Mayor que usted",
  },
  {
    nombre: "Carlos",
    cedula: "2374589201",
    fn: "8-4-1987",
    correo: "carlos@gmail.com",
    ciudad: "Cali",
    artista: "David Guetta",
    cancion1: "i'm good",
    cancion2: "Don't you worry",
    cancion3: "Titanium",
  },
  {
    nombre: "Jesica",
    cedula: "1234543210",
    fn: "12-01-1995",
    correo: "jesica@gmail.com",
    ciudad: "Pereira",
    artista: "Teylor Swift",
    cancion1: "Anti-Hero",
    cancion2: "lavender haze",
    cancion3: "maroon",
  },
  {
    nombre: "Eduar",
    cedula: "1034274590",
    fn: "17-07-1987",
    correo: "eduar@gmail.com",
    ciudad: "Caldas",
    artista: "Green Day",
    cancion1: "Bascket Case",
    cancion2: "When i come around",
    cancion3: "She",
  },
  {
    nombre: "Alejandro",
    cedula: "195847212",
    fn: "30-10-1998",
    correo: "alejando@gmail.com",
    ciudad: "Bogotá",
    artista: "Harry Styles",
    cancion1: "As it Was",
    cancion2: "watermelon sugar",
    cancion3: "adore you",
  },
];

let menu;

menu = prompt(
  "Digite la opcion 1 para ingresar un nuevo registro o 2 para mostrar un registro"
);

switch (menu) {
  case "1":
    registro.push({
      nombre: "Adriana",
      cedula: "1324354624",
      fn: "8-08-1992",
      correo: "adriana@gmail.com",
      ciudad: "Barranquilla",
      artista: "Diomedes Dias",
      cancion1: "Tú eres la reina",
      cancion2: "Sin medir Distancia",
      cancion3: "Amarte mas no pude",
    });
    console.log(registro);
    break;
  case "2":
    console.log(registro);
    indice = prompt("ingrese el indice del elemento a mostrar");
    console.log(registro[indice]);
    break;
  default:
    alert("no es una opción para elegir");
}
