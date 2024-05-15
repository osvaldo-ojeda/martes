import { Router } from "express";
import userRoutes from "./usersRoutes.js";
import productRoutes from "./productRoutes.js";
import { myLogger } from "../middlewares/myLogger.js";

const routes = Router();
// routes.use("/product",myLogger, productRoutes);
routes.use("/product", productRoutes);
// routes.use(myLogger)
routes.use("/user", userRoutes);

export default routes;
