import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

type RequestTarget = "body" | "params" | "query";

export function validate(schema: ZodType, target: RequestTarget = "body") {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
      return;
    }

    req[target] = result.data;
    next();
  };
}
