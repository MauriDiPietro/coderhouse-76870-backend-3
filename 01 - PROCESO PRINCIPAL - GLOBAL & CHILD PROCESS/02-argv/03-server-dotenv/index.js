import express from "express";
import { connectDB } from "./db.js";
import config from "./config.js";

const app = express();

// console.log(program.opts());

const PORT = config.PORT;

connectDB()
  .then(() => console.log("conectado a mongo"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server ok puerto ${PORT} env: ${config.ENV}`));
