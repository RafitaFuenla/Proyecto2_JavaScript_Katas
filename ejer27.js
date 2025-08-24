/* EJERCICIO 27 */
/* Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.*/

const cartoons = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

let old = cartoons[0];
// Creo una constante con la primera propiedad del objeto como supeustamente la mas antigua

for (let i = 1; i < cartoons.length; i++) {
    // Recorro todo el array
  if (cartoons[i].debut < old.debut) {
    // Compruebo si la propiedad i++ es menor a la la del comienzo, si es menor, la sustituya.
    old = cartoons[i].name;
  }
}

console.log(old);

//let arrayFiltrado = array.filter((elemento) => elemento > 3);

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
