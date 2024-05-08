import express from "express";
// console.log(`🚀 ~ express:`, express)

const app = express();
// console.log(`🚀 ~ app:`, app)

app.get("/:id", (req, res) => {
  console.log(`🚀 ~ app.get ~ res:`, res)
  res.send("hola get desde express");
});

app.post("/data", (req, res) => {
  res.send("hola post desde express");
});

app.listen(8080, () => {
  console.log(`server ok http://localhost:8080`);
});
