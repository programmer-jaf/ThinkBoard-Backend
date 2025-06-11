import { Todo } from "../model/todo.model.js";
import { User } from "../model/user.model.js";

export const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const user = req.user;
    // check if all fields are present
    if (!title || !description) {
      throw new Error("All fields are required");
    }
    const createTodo = await Todo.create({
      title,
      description,
      user: user.userId,
    });

    // update the user's todo array
    await User.findByIdAndUpdate(user.userId, {
      $push: { todo: createTodo._id },
    });
    // return the created todo
    return res.status(201).json({
      message: "Todo Created Successfully",
      data: createTodo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getTodoController = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      message: "GET all TODOS",
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getTodoByIdController = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    return res.status(200).json({
      message: "GET Todo by ID Successfully",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      title ? { title } : description ? { description } : {},
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "Update Todo by ID Successfully",
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteTodoController = async (req, res) => {
  try {
    if (!req.params) {
      throw new Error("Todo ID is required");
    }
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    await Todo.findByIdAndDelete(req.params.id);
    // update the user's todo array
    await User.findByIdAndUpdate(todo.user, {
      $pull: { todo: todo._id },
    })
    return res.status(204).json({
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
