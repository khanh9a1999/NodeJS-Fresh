import type { Request, Response, NextFunction } from "express";

export function responseTimeMiddleware(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const end = Date.now();

    console.log(`${req.method} ${req.originalUrl} ${end - start}ms`);
  });

  next();
}
