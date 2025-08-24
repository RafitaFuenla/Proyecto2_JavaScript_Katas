/* EJERCICIO 25 */
/* Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

Imprime ambos conteos por consola.*/

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];


const antes2000 = []
const despues2000 = []

for (let i = 0; i < movies.length; i++){
    if (movies[i].releaseYear < 2000){
        antes2000.push(movies[i].title)
    }
}

for (let i = 0; i < movies.length; i++){
    if (movies[i].releaseYear > 2000){
        despues2000.push(movies[i].title)
    }
}

console.log(antes2000)
console.log(despues2000)

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
