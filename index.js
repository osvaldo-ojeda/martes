// console.log(module)
// console.log(require)

// const sayHello=require("./functions/sayHello")
const { sayHello, param} = require("./functions/sayHello");

console.log(param);
sayHello();

// destructuring
const dataUsuario = {
  nombre: " Juan",
  segundoNombre:"Pedro",
  edad: 44,
};

const {edad, nombre, apellido}=dataUsuario
// const nombre=dataUsuario.nombre;
// const edad=dataUsuario.edad;

console.log(`🚀 ~ edad:`, edad)
console.log(`🚀 ~ nombre:`, nombre)
console.log(`🚀 ~ apellido:`, apellido)

