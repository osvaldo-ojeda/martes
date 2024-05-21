import { Router } from "express";
import userRoutes from "./usersRoutes.js";
import productRoutes from "./productRoutes.js";


const routes = Router();
routes.use("/product", productRoutes);
routes.use("/user", userRoutes);

export default routes;
