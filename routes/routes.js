import { Router } from "express";
import WordController from "../controllers/WordController.js";

const routes = Router();
const wordController = new WordController();
routes.post("/", wordController.insertWord);
routes.get("/", wordController.getWords);
routes.get("/:cantidad", wordController.getWordsApi);
routes.delete("/");

export default routes;
