import http from "node:http";
// console.log(`🚀 ~ http:`, http)

const app = http.createServer((peticion, respuesta) => {
  // console.log(`🚀 ~ app ~ peticion:`, peticion)
  // console.log(`🚀 ~ app ~ respuesta:`, respuesta)
  if (peticion.url === "/count") {
    respuesta.end("count");
  } else if ((peticion.url === "/data") & (peticion.method === "POST")) {
    respuesta.end("data");
  } else {
    respuesta.end("hola desde el servidor");
  }
});
// console.log(`🚀 ~ app:`, app)

app.listen(8080, () => {
  console.log("server ok ");
});
