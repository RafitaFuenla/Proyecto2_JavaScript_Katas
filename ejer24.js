/* EJERCICIO 24 */
/* Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola.*/

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

for (let i = 0; i < characters.length; i++){
    if (characters[i].species === "Human"){
        humanCharacters.push(characters[i].name)
    }
}

console.log(humanCharacters)

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
