import { Router } from "express";
import { registerUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/", getUsers);

export default userRouter;