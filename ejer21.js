/* EJERCICIO 21 */
/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const edad = [];

for (user of users) {
  if (user.years < 18) {
    edad.push("Usuarios menores de edad: " + user.name);
  }
  if (user.years >= 18) {
    edad.push("Usuarios mayores de edad: " + user.name);
  }
}

console.log(edad);

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
