import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

app.use(routes);

app.use((req, res) => {
  res.status(404).send({ success: false, message: "not found" });
});

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`server ok http://localhost:${SERVER_PORT}`);
});
