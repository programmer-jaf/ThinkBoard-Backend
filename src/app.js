import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import config from "./config/config.js";
import userRouter from "./routes/user.routes.js";
import todoRouter from "./routes/todo.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

// Configuration
const app = express();

// Middleware
app.use(
  cors({
    origin: config.CORS_ORIGIN,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(helmet());

app.use(morgan("dev"));

app.use(
  express.json({
    limit: "50mb",
    type: "application/json",
    extended: true,
  })
);

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/todo", todoRouter);
// health check route
app.get("/", (req, res) => {
  res.send("I am healthy 😎");
})
// Global Error Handler
app.use(errorMiddleware);
// Export App
export default app;
