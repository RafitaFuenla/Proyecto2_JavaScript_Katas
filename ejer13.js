/* EJERCICIO 13 */
/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función: */

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  const posicion = nameList.indexOf(nameToFind);

  if (posicion !== -1) {
    return { existe: true, posicion: posicion };
  } else {
    return { existe: false };
  }
}

// Prueba
console.log(nameFinder(names, "Tony"));