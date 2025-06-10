import { Router } from "express";
import { signInController, signOutController, signUpController } from "../controller/user.controller.js";

const userRouter = Router();

// routes
userRouter.post("/sign-up",signUpController );
userRouter.post("/sign-in", signInController);
userRouter.post("/sign-out",signOutController);


export default userRouter;