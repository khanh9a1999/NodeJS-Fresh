import express, { type Express } from "express";
import apiRouter from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { notFound } from "./middlewares/not-found.js";

const app: Express = express();

app.use(express.json());
app.use("/api/v1", apiRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
