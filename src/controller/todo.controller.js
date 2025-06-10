export const createTodoController = async (req, res) => {
  try {
    return res.status(201).json({
      message: "Todo Created Successfully",
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
