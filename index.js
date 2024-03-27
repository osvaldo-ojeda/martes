// // tipos de datos en js

// // datos primitivos
// // String, numbers, Boolean, null y undefined, bigint, symbol

// let str = "string o cadena";
// console.log(`🚀 ~ str:`, str);
// console.log(`🚀 ~ str:`, typeof str);

// let nun = 22;
// console.log(`🚀 ~ nun:`, nun);
// console.log(`🚀 ~ nun:`, typeof nun);

// let bigN = 2345689876n;
// console.log(`🚀 ~ bigN:`, bigN);
// console.log(`🚀 ~ bigN:`, typeof bigN);

// let bool = true; //false
// console.log(`🚀 ~ bool:`, bool);
// console.log(`🚀 ~ bool:`, typeof bool);

// let und = undefined;
// console.log(`🚀 ~ und:`, und);
// console.log(`🚀 ~ und:`, typeof und);

// let sym = Symbol(23);
// console.log(`🚀 ~ sym:`, sym);
// console.log(`🚀 ~ sym:`, typeof sym);

// let nl = null;
// console.log(`🚀 ~ nl:`, nl);
// console.log(`🚀 ~ nl:`, typeof nl);

// // datos complejos
// // objetos
// const obj = {
//   nombre: "camilo",
//   apellido: "ojeda",
//   ladrar: function () {
//     console.log("estoy ladrando");
//   },
// };
// // obj="kuka"
// obj.nombre = "canela";
// console.log(`🚀 ~ obj:`, obj.nombre);
// console.log(`🚀 ~ obj:`, obj["nombre"]);
// console.log(`🚀 ~ obj:`, typeof obj);

// const arr = [1, "osval", {}];
// arr[2] = "Ojeda";
// console.log(`🚀 ~ arr:`, arr[1]);
// console.log(`🚀 ~ arr:`, arr[2]);
// console.log(`🚀 ~ arr:`, typeof arr);

// const newDate = new Date();
// console.log(`🚀 ~ newDate:`, newDate);
// console.log(`🚀 ~ newDate:`, typeof newDate);

// const date = Date();
// console.log(`🚀 ~ date:`, date);
// console.log(`🚀 ~ date:`, typeof date);

// ---------------
// console.log(`🚀 ~ nombre:`, nombre)
// var nombre="osvaldito"
// console.log(`🚀 ~ nombre:`, nombre)
// saludar("jaco");
// function saludar(param) {
//   console.log("hola " + param + " como estas?");
//   console.log(`hola ${param} como estas????`);
// }
// console.log(`🚀 ~ saluda ~ saludar:`, saludar);
// console.log(`🚀 ~ saluda ~ saludar:`, typeof saludar);
// // console.log(`🚀 ~ saluda ~ saludar:`,  saludar())
// saludar(2, "hola");

// arrow function
// const suma = (x, y) => x + y;
// suma(7,8)
// const suma = (x, y) => {
//  return  x + y;
// };
// console.log(`🚀 ~ suma:`, suma);
// console.log(suma(5, 6));
// console.log(suma(7,8))

// console.log("this", this)

function thisFunction() {
     console.log(`🚀 ~ thisFunction ~ :`, this)
}
// thisFunction()

const thisArrow=()=>{
     console.log(`🚀 ~ thisArrow ~ thisArrow:`, this)
}
// thisArrow()

// ---------------------

// let nick= "Pablo"
// let nombre=nick
// nombre="Franco Roman"
// console.log(`🚀 ~ name:`, nick)
// console.log(`🚀 ~ nombre:`, nombre)

const data={
     nombre:"Juanito",
     edad:30,
     titulos:["primario", "secundario"]
}
// const userData=data
// userData.nombre="Raul"
// console.log(`🚀 ~ data:`, data)
// console.log(`🚀 ~ userData:`, userData)

// copias de obj
const dataHandCopy={
     nombre:data.nombre
}
// dataHandCopy.nombre="juan"
// console.log(`🚀 ~ dataHandCopy:`, dataHandCopy)
// console.log(`🚀 ~ data:`, data)

// spread copy
// const dataSpread={...data}
//  dataSpread.nombre="Juan"
// console.log(`🚀 ~ dataSpread:`, dataSpread)
// console.log(`🚀 ~ data:`, data)

// Object.assign
// const  dataAssign =Object.assign({}, data);
// dataAssign.nombre="juan";
// dataAssign.titulos.push("bachillerato")
// console.log(`🚀 ~ dataAssign:`, dataAssign)
// console.log(`🚀 ~ data:`, data)

// json

const jsonCopy=JSON.parse(JSON.stringify(data))
jsonCopy.nombre="juan"
 jsonCopy.titulos.push("bachillerato")
console.log(`🚀 ~ jsonCopy:`, jsonCopy)

console.log(`🚀 ~ data:`, data)






