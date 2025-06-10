import { Router } from "express";
import { authenticate } from '../middlewares/authenticate.middleware.js';
import {

  createTodoController,
  getTodoByIdController,
  getTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controller/todo.controller.js";
const todoRouter = Router();

// routes
todoRouter.post("/", authenticate,createTodoController);
todoRouter.get("/", authenticate,getTodoController);
todoRouter.get("/:id", authenticate,getTodoByIdController);
todoRouter.put("/:id", authenticate,updateTodoController);
todoRouter.delete("/:id", authenticate,deleteTodoController);

export default todoRouter;