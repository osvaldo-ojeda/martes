import express from "express";
import moment from "moment";
import url from "url";
import path from "path";
// console.log(`🚀 ~ path:`, path)
// console.log(`🚀 ~ url:`, url)
// console.log(`🚀 ~ express:`, express)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`🚀 ~ meta.url:`, import.meta.url);
console.log(`🚀 ~ __filename:`, __filename);
console.log(`🚀 ~ __dirname:`, __dirname);

const app = express();
// console.log(`🚀 ~ app:`, app)

// app.get("/:id", (req, res) => {
//   console.log(`🚀 ~ app.get ~ res:`, res)
//   res.send("hola get desde express");
// });
// app.use("/archivo", express.static("index2.html"));
// app.use("/archivo", express.static("public"));

app.post("/data", (req, res) => {
  res.send("hola post desde express");
});

app.get("/fecha", (req, res) => {
  const fechaActual = moment().format("DD-MM-YYYY");
  res.send(fechaActual);
});
let count = 0;
app.get("/count", (req, res) => {
  count++;
  res.send({ count });
});

app.get("/archivo/:file", (req, res) => {
  // console.log(`🚀 ~ app.get ~ req:`, req.params)
  // const file = req.params.file;
  // const id = req.params.id;
  // const numero = req.params.numero;
  // const { file, id, numero } = req.params;
  const { file } = req.params;
  console.log(`🚀 ~ app.get ~ file:`, file);
  res.sendFile(path.join(__dirname, "public", `${file}.html`));
});

app.listen(8080, () => {
  console.log(`server ok http://localhost:8080`);
});
