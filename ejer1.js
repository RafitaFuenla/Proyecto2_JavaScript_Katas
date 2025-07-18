/* EJERCICIO 1 */
// Ejercicio 1.1 //
let miSuperheroeFavorito = "Hulk";

// Ejercicio 1.2 //
let numeroFavorito = 50;

// Ejercicio 1.3 //
let altura = 5;
let longitud = 10;

// Ejercicio 1.4 //
let suma = altura + longitud;

// Ejercicio 1.5 //
console.log("Mi superheroe favorito es", miSuperheroeFavorito);
console.log("Mi numero favorito", numeroFavorito);
console.log("Altura:", altura);
console.log("Longitud:", longitud);
console.log("Suma:", suma);

/* EJERCICIO 2 */
// Ejercicio 2.1 //
const jedi = { nombre: "Luke Skywalker", edad: 19 };

jedi.edad = 25;

// Ejercicio 2.2 //
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log(
  `Soy ${nombre} ${apellido} tengo ${edad} años y soy una princesa de Alderaan`
);

// Ejercicio 2.3 //
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const precioTotal = sable1.precio + sable2.precio;

console.log("Precio sables:", precioTotal);

// Ejercicio 2.4 //
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

console.log("Precio final nave1:", nave1.precioFinal + precioBaseGlobal);
console.log("Precio final nave2:", nave2.precioFinal + precioBaseGlobal);

/* EJERCICIO 3 */
// Ejercicio 3.1 //
let numberA = 10 * 5;
console.log("(Ejercicio 3.1)", numberA);

// Ejercicio 3.2 //
let numberB = 10 / 2;
console.log("(Ejercicio 3.2)", numberB);

// Ejercicio 3.3 //
let numberC = 15 % 9;
console.log("(Ejercicio 3.3)", numberC);

// Ejercicio 3.4 //
let p = 10;
let j = 5;
let o = p + j;
console.log("(Ejercicio 3.4)", o);

// Ejercicio 3.5 //
let c = 10;
let m = 5;
let l = c * m; /* Cambio i por l para evitar errores */
console.log("(Ejercicio 3.5)", l);

/* EJERCICIO 4 */
// Ejercicio 4.1 //
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
const posicion = 1;
console.log(aldeanos[3]);

// Ejercicio 4.2 //
aldeanos.push("Cervasio");
console.log(aldeanos);

// Ejercicio 4.3 //
aldeanos.shift();
aldeanos.unshift("Bambina");
console.log(aldeanos);

// Ejercicio 4.4 //
aldeanos.reverse();
console.log(aldeanos);

// Ejercicio 4.5 //
const index = aldeanos.indexOf("Narciso");
if (index !== -1) {
  aldeanos.splice(index, 1, "Canela");
}
console.log(aldeanos);

// Ejercicio 4.6 //
console.log(aldeanos.slice(-1)[0]);

/* EJERCICIO 5 */
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 === 10) {
  console.log();
}

if (number2 / number1 == 2) {
  console.log();
}

if (number1 !== number2) {
  console.log();
}

if (number3 != number1) {
  console.log();
}

if (number3 * 5 == number1) {
  console.log();
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log();
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log();
}

/* EJERCICIO 6 */
// Ejercicio 6.1 //
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// Ejercicio 6.2 //
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Ejercicio 6.3 //
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}

/* EJERCICIO 7 */
function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

greaterNumber(7, 9);

/* EJERCICIO 8 */
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longest = stringList[0];
  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }
  return longest;
}

console.log(findLongestWord(avengers));

/* EJERCICIO 9 */
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  return suma;
}

console.log(sumNumbers(numbers));

/* EJE]RCICIO 10 */
const numbers2 = [12, 21, 38, 5, 45, 37, 6]; // Cambio a numbers2

function average(numberList2) {
  //cambio a numberlist2
  let suma = 0;
  for (let i = 0; i < numberList2.length; i++) {
    suma += numberList2[i];
  }
  return suma / numberList2.length;
}

console.log(average(numbers2));

/* EJERCICIO 11 */

/* EJERCICIO 12 */

/* EJERCICIO 13 */

/* EJERCICIO 14 */

/* EJERCICIO 15 */

/* EJERCICIO 16 */

/* EJERCICIO 17 */

/* EJERCICIO 18 */

/* EJERCICIO 19 */

/* EJERCICIO 20 */

/* EJERCICIO 21 */

/* EJERCICIO 22 */

/* EJERCICIO 23 */

/* EJERCICIO 24 */

/* EJERCICIO 25 */

/* EJERCICIO 26 */

/* EJERCICIO 27 */

/* EJERCICIO 28 */

/* EJERCICIO 29 */

/* EJERCICIO 30 */

/* EJERCICIO 31 */

/* EJERCICIO 32 */

/* EJERCICIO 33 */

/* EJERCICIO 34 */

/* EJERCICIO 35 */

/* EJERCICIO 36 */

/* EJERCICIO 37 */

/* EJERCICIO 38 */

/* EJERCICIO 39 */

/* EJERCICIO 40 */

/* EJERCICIO 41 */

/* EJERCICIO 42 */
