function sumElements(array) {
  //   const sum = array.reduce((acumulador, value, index, array) => {
  //     console.log(`🚀 ~ sum ~ acumulador:`, acumulador);
  //     console.log(`🚀 ~ sum ~ value:`, value);
  //     console.log(`🚀 ~ sum ~ index:`, index);
  //     console.log(`🚀 ~ sum ~ array:`, array);
  //     return acumulador+value;
  //   }, 0);
  //   const sum = array.reduce((acumulador, value) => acumulador + value);
  //   const sum = array.reduce((acumulador, value) => {
  //     //     if (typeof value === "number") {
  //     //       return acumulador + value;
  //     //     }
  //     //     return acumulador;
  //     // --------------
  //     //     if (typeof value === "number") return acumulador + value;
  //     //     return acumulador;
  //     // --------------------
  //     return typeof value === "number" ? acumulador + value : acumulador;
  //   }, 0);

  const sum = array.reduce(
    (acumulador, value) =>
      typeof value === "number" ? acumulador + value : acumulador,
    0
  );
  console.log(`🚀 ~ sumElements ~ sum:`, sum);
}

module.exports = sumElements;
