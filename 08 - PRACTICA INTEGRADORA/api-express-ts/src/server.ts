import express from "express";
import config from "./config";
import { initMongoDB } from "./config/db.connection";

const app = express();

app.use(express.json());

initMongoDB()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(config.PORT, () => console.log("Server running on port 8080"));
