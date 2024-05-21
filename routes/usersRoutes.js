import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUser);
userRoutes.get("/es", (req, res, next) => {
  res.send("get all users es");
});
userRoutes.get("/:id", (req, res, next) => {});
userRoutes.post("/");

userRoutes.put("/:id", (req, res) => {
  res.send("update user by id");
});

userRoutes.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default userRoutes;
