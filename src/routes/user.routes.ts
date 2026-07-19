import { Router, type Router as ExpressRouter } from "express";
import { createUser, listUsers } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.js";
import { createUserSchema } from "../schemas/user.schema.js";

const userRouter: ExpressRouter = Router();

userRouter.get("/", listUsers);
userRouter.post("/", validate(createUserSchema, "body"), createUser);

export default userRouter;
