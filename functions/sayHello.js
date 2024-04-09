function sayHello(param) {
  console.log(`🚀 Hello ${param}`);
}
const param = "Camilo";
// module.exports = sayHello;  // Exporta
// module.exports = { sayHello: sayHello, nombre: nombre }; // Exporta
module.exports = {sayHello, param};  // Exporta
