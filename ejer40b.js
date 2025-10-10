/* Ejercicio 40
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

const resultado = [];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(
  `La posicion del texto en el array es ${findArrayIndex(
    mainCharacters,
    "Rey"
  )}`
);
console.log(
  `La posicion del texto en el array es ${findArrayIndex(
    mainCharacters,
    "Han Solo"
  )}`
);

function removeItem(array, text) {
  let i = findArrayIndex(array, text);
  if (i != -1) {
    array.splice(i, 1);
    return array;
  }
}

console.log(
  `El array sin el valor seleccionado se quedaria asi: ${removeItem(
    mainCharacters,
    "Leia"
  )}`
);

/* Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */
