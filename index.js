// console.log(module)
// console.log(require)

// const sayHello=require("./functions/sayHello")
const { sayHello, param } = require("./functions/sayHello");
const findMaxNumber = require("./functions/findMaxNumber");
const sumElements = require("./functions/sumElements");
const abbrevName = require("./functions/abbrevName");
const oneProperty = require("./functions/oneProperty");
const primaryStudents=require("./functions/primaryStudents")

// console.log(param);
// sayHello();

// destructuring
const dataUsuario = {
  nombre: " Juan",
  segundoNombre: "Pedro",
  edad: 44,
};

const { edad, nombre, apellido } = dataUsuario;
// const nombre=dataUsuario.nombre;
// const edad=dataUsuario.edad;

// console.log(`🚀 ~ edad:`, edad)
// console.log(`🚀 ~ nombre:`, nombre)
// console.log(`🚀 ~ apellido:`, apellido)
// -----------------
// findMaxNumber([40, 30, 60, 5])
sumElements([40, 30, 60, 5, "x"]);
abbrevName("camilo chayane ken");
console.log(oneProperty(
  [
    { name: "Kuka", edad: 3 },
    { name: "Canela", edad: 4 },
  ],
  "name"
))


primaryStudents([
  { nombre: "Juan", edad: 17, curso: "Primero" },
  { nombre: "Ana", edad: 18, curso: "Segundo" },
  { nombre: "carlos", edad: 16, curso: "Primero" },
  { nombre: "María", edad: 19, curso: "Tercero" },
])