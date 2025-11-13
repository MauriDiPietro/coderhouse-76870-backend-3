import express from "express";

const app = express();

const PORT = process.argv[2] || 3000;

const ENV = process.argv[3] || 'dev';

app.listen(PORT, () => console.log(`Server ok puerto ${PORT} env: ${ENV}`));
