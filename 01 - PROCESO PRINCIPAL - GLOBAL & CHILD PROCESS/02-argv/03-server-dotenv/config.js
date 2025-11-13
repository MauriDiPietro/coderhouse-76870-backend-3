import { program } from "commander";
import dotenv from "dotenv";

program
.option("-p <port>", "port server", 8000)
.option("-e <environment>", "env server", "dev");

program.parse();

const ENV = program.opts().e;

dotenv.config({
  path:
    ENV === "prod"
      ? "./.env.prod"
      : ENV === "qas"
      ? "./.env.qas"
      : "./.env.dev",
});

export default {
    ENV,
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}