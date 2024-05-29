import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.post("/", userControllers.createUser);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;
