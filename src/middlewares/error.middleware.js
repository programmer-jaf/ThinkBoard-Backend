export const errorMiddleware = (err, req, res) => {
  const statusCode = err.statusCode || 500;
  // mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    return res.status(404).json({ message });
  }
  // mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    return res.status(404).json({ message });
  }

  return res.status(statusCode).json({
    message: err.message,
  });
};
