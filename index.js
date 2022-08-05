/*
if (10 > 5) {
  console.log("10 es mayor");
} else {
  console.log("5 es menor");
}

if (edad > 18) {
  console.log("Tienes mas de 18.");
  //...
} else if (edad < 18) {
  console.log("No tienes 18 aun.");
} else {
  console.log("Tienes 18.");
}
*/

var edad = 20;

//Operador terniario
edad > 18 ? console.log("Tienes mas de 18.") : console.log("No tienes 18 aun.");
edad > 18
  ? console.log("Tienes mas de 18.")
  : edad < 18
  ? console.log("No tienes 18 aun.")
  : console.log("Tienes 18");

var contrasena = "Contra123";

//Retorno de valor con operador ternario
var acceso =
  contrasena == "Contra1234" ? "Acceso permitido" : "Acceso denegado";
console.log(acceso); //Acceso denegado

//Switch Case
switch (edad) {
  case 18:
  case 19:
  case 20:
    console.log("tienes entre 18 y 20 años");
    //... mas codigo
    break;
  case 25:
    console.log("tienes 25 años");
    break;
  //mas casos

  default:
    console.log("no tengo un caso para tu edad.");
}

//Funciones

function hola() {
  console.log("Hola desde la funcion.");
}

hola();

function holaNombre(nombre) {
  console.log("Hola soy " + nombre);
}

holaNombre("Walther"); //Hola soy Walther
let miNombre = "David";
holaNombre(miNombre); //Hola soy David

function hola3(nombre, apellido) {
  console.log("Hola soy " + nombre + " " + apellido);
}

hola3("Walther", "Carrasco"); //Hola soy Walther Carrasco

function multiplicar(numero1, numero2) {
  return numero1 * numero2;

  //codigo
}

let respuesta = multiplicar(2, 3);
console.log(respuesta); //6

function multiplicar2(numero1, numero2) {
  if (numero1 == 0 || numero2 == 0) {
    return "No puedo ejecutar la multiplicacion";
  }
  return numero1 * numero2;
}

let respuesta2 = multiplicar2(2, 0);
console.log(respuesta2);

let a = 5;
let b = 6;
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(1, 2)); //2
console.log(multiplicar(a, b)); //30

function numeros(...args) {
  console.log(args);
}

console.log(numeros(1, 2, 3, 4));

//Arrow function
const multiplicacion2 = (a, b) => {
  return a * b;
};

function hola(nombre, func) {
  console.log("Hola soy " + nombre);
  func();
}

function log() {
  console.log("hola desde log");
}

hola("Walther", log);

hola("Walther", () => {
  console.log("Hola desde log");
});

//DRY = Dont Repeat Yourself
