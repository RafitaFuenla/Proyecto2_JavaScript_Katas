/* Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("El numero mas alto es:", numberOne);
  } else if (numberOne < numberTwo) {
    console.log("El numero mas alto es:", numberTwo);
  } else {
    console.log("Los números son iguales");
  }
}

greaterNumber(5, 5)