import { Router } from "express";
import { signInController, signOutController, signUpController } from "../controller/user.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const userRouter = Router();

// routes
userRouter.post("/sign-up",signUpController );
userRouter.post("/sign-in", signInController);
userRouter.post("/sign-out",authenticate,signOutController);


export default userRouter;