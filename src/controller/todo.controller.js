import { Todo } from '../model/todo.model.js';
import { User } from '../model/user.model';
export const createTodoController = async (req, res) => {
  try {
    const {title,description} = req.body;
    const user = req.user;
    // check if all fields are present
    if (!title || !description) {
      throw new Error("All fields are required");
    }
    const createTodo = await Todo.create({title,description,user:user.userId,});

    // update the user's todo array
    await User.findByIdAndUpdate(user.userId, {
      $push: { todo: createTodo._id },
    })
    // return the created todo
    return res.status(201).json({
      message: "Todo Created Successfully",
      data:createTodo,
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
    return res.status(200).json({
      message: "GET all TODOS",
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
    return res.status(200).json({
      message: "GET Todo by ID Successfully",
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
    return res.status(200).json({
      message: "Update Todo by ID Successfully",
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
