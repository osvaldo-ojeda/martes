// ## ejercicio 4: Única propiedad
// Declará una función llamada oneProperty que reciba un arreglo de objetos como parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como propiedad al string pasado como parámetro.

// ``Ejemplo:
// let arreglo = [ { name: “Kuka”, edad:3 }, { name: “Canela”, edad:4 } ]
// oneProperty(arreglo, “edad”) debe retornar [ { edad:3 }, { edad: 4 } ]
// oneProperty(arreglo, “name”) debe retornar [ { name: “Kuka”}, { name: “Canela” } ]``

// function oneProperty(array, str) {
//   //   const property = [];
//   //   const obj = {};
//   //   array.forEach((element) => {
//   //     //     obj[str] = element[str];
//   //     //     property.push(obj);
//   //     property.push({ [str]: element[str] });
//   //   });
//   //  const property = array.map((elemento) => {
//   // //   console.log(`🚀 ~ property ~ elemento:`, elemento[str])
//   //    return {
//   //      [str]: elemento[str],
//   //    };
//   //  });
//   const property = array.map((elemento) => ({ [str]: elemento[str] }));
//   console.log(`🚀 ~ property ~ property:`, property);
// }

// function oneProperty(array, str) {
//   const property = array.map(function (elemento) {
//     return {
//       [str]: elemento[str],
//     };
//   });
//   console.log(`🚀 ~ property ~ property:`, property);
// }

// const oneProperty = (array, str) => {
//   const property = array.map((element) => ({ [str]: element[str] }));
//   console.log(`🚀 ~ oneProperty ~ property:`, property);
// };
const oneProperty = (array, str) =>
  array.map((element) => ({ [str]: element[str] }));

module.exports = oneProperty;
