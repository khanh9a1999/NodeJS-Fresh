import { Router, type Router as ExpressRouter } from "express";
import userRouter from "./user.routes.js";

const apiRouter: ExpressRouter = Router();

apiRouter.use("/users", userRouter);

export default apiRouter;
