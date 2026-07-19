import express, { type Express } from "express";
import apiRouter from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { notFound } from "./middlewares/not-found.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { responseTimeMiddleware } from "./middlewares/response-time.middleware.js";

const app: Express = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use(responseTimeMiddleware);
app.use("/api/v1", apiRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
