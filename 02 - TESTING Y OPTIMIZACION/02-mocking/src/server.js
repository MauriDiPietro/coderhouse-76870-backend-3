import express from "express";
import { connectDB } from "./config/db-connection.js";
import productRouter from "./routes/product-router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

connectDB()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.listen(8080, () => console.log("Server ok, puerto 8080"));
