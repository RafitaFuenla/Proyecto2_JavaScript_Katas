/* EJERCICIO 4 */
// Ejercicio 4.1 //
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
const posicion = 1;
console.log("(Ejercicio 4.1)", aldeanos[3]);

// Ejercicio 4.2 //
aldeanos.push("Cervasio");
console.log("(Ejercicio 4.2)", aldeanos);

// Ejercicio 4.3 //
aldeanos.shift();
aldeanos.unshift("Bambina");
console.log("(Ejercicio 4.3)", aldeanos);

// Ejercicio 4.4 //
aldeanos.reverse();
console.log("(Ejercicio 4.4)", aldeanos);

// Ejercicio 4.5 //
const index = aldeanos.indexOf("Narciso");
if (index !== -1) {
  aldeanos.splice(index, 1, "Canela");
}
console.log("(Ejercicio 4.5)", aldeanos);

// Ejercicio 4.6 //
console.log("(Ejercicio 4.6)", aldeanos.slice(-1)[0]);