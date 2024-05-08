import express from "express";
import moment from "moment";
// console.log(`🚀 ~ express:`, express)

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


app.get("/archivo", (req, res) => {

res.sendFile()
});





app.listen(8080, () => {
  console.log(`server ok http://localhost:8080`);
});
