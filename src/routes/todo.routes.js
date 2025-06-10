import { Router } from "express";
import {

  createTodoController,
  getTodoByIdController,
  getTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controller/todo.controller.js";
const todoRouter = Router();

// routes
todoRouter.post("/", createTodoController);
todoRouter.get("/", getTodoController);
todoRouter.get("/:id", getTodoByIdController);
todoRouter.put("/:id", updateTodoController);
todoRouter.delete("/:id", deleteTodoController);

export default todoRouter;