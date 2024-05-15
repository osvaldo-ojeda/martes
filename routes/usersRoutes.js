import { Router } from "express";
import { myLogger } from "../middlewares/myLogger.js";
import db from "../connection/connection.js";

const userRoutes = Router();

userRoutes.get("/", myLogger, (req, res) => {
  res.send("get all users");
});

userRoutes.get("/es", (req, res, next) => {
  res.send("get all users es");
});

userRoutes.get("/:id", (req, res, next) => {
  console.log(`🚀 ~ userRoutes.get ~ req:`, req.query);
  const { id } = req.params;
  const { name, age } = req.query;
  console.log(`🚀 ~ userRoutes.get ~ age:`, age);
  console.log(`🚀 ~ userRoutes.get ~ name:`, name);
  res.send(`get user by id:${id}`);
});

userRoutes.post("/", async (req, res) => {
  // console.log(`🚀 ~ userRoutes.post ~ req:`, req.body);
  // const { name, pass } = req.body;
  // console.log(`🚀 ~ userRoutes.post ~ pass:`, pass);
  // console.log(`🚀 ~ userRoutes.post ~ name:`, name);
  // res.send(`create user name: ${name} y pass: ${pass}`);

  try {
    const data= await db.query()
  } catch (error) {
    
  }
});

userRoutes.use(myLogger);

userRoutes.put("/:id", (req, res) => {
  res.send("update user by id");
});

userRoutes.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default userRoutes;
