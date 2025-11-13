import express from "express";

const app = express();

const PORT = process.env.PORT;

const ENV = process.env.ENV;

app.listen(PORT, () => console.log(`Server ok puerto ${PORT} env: ${ENV}`));
