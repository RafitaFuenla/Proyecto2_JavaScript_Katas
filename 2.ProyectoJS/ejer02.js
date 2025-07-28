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
