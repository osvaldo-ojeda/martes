import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";
import { validateLogin } from "../middlewares/validateLogin.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post("/login", userControllers.login);
userRoutes.post("/", userControllers.createUser);

userRoutes.get("/me", validateLogin, userControllers.me);
userRoutes.use(validateLogin);
userRoutes.get("/", userControllers.getAllUser);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;
