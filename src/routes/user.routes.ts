import { Router, type Router as ExpressRouter } from "express";
import { listUsers } from "../controllers/user.controller.js";

const userRouter: ExpressRouter = Router();

userRouter.get("/", listUsers);

export default userRouter;
