import type { Request, Response } from "express";
import { userService } from "../container.js";
import type { CreateUserInput } from "../schemas/user.schema.js";
import { successResponse } from "../utils/response.js";

export async function listUsers(_req: Request, res: Response): Promise<void> {
  const users = await userService.getUsers();

  successResponse(res, users, "Users");
}

export async function createUser(req: Request, res: Response): Promise<void> {
  const input = req.body as CreateUserInput;
  const user = await userService.createUser(input);

  successResponse(res, user, "User created", 201);
}
