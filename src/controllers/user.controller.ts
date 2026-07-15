import type { Request, Response } from "express";
import { getFirstUser } from "../services/user.service.js";

export function listUsers(_req: Request, res: Response): void {
  const user = getFirstUser();

  res.status(200).json({
    success: true,
    message: "Users",
    data: user,
  });
}
