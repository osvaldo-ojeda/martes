// console.log(module)
// console.log(require)

// const sayHello=require("./functions/sayHello")
const { sayHello, param} = require("./functions/sayHello");
const findMaxNumber= require("./functions/findMaxNumber")
const sumElements= require("./functions/sumElements")
const abbrevName= require('./functions/abbrevName')

// console.log(param);
// sayHello();

// destructuring
const dataUsuario = {
  nombre: " Juan",
  segundoNombre:"Pedro",
  edad: 44,
};

const {edad, nombre, apellido}=dataUsuario
// const nombre=dataUsuario.nombre;
// const edad=dataUsuario.edad;

// console.log(`🚀 ~ edad:`, edad)
// console.log(`🚀 ~ nombre:`, nombre)
// console.log(`🚀 ~ apellido:`, apellido)
// -----------------
// findMaxNumber([40, 30, 60, 5])
sumElements([40, 30, 60, 5,"x"])
abbrevName("camilo chayane ken")