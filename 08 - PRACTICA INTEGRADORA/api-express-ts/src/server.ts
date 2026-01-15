import express from "express";
import config from "./config";
import { initMongoDB } from "./config/db.connection";
import { logger } from "./logs/logger";
import { errorHandler } from "./middlewares/error.handler";
import apiRouter from "./routes/index";

const app = express();

app.use(express.json());

initMongoDB()
  .then(() => logger.info("Connected to MongoDB"))
  .catch((err) => logger.error(err));

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(config.PORT, () => logger.info("Server running on port 8080"));
