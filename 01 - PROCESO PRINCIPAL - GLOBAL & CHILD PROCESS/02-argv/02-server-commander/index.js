import express from "express";
import { program } from 'commander'

const app = express();

program
    .option('-p <port>', 'port server', 8000)
    .option('-e <environment>', 'env server', 'local')

program.parse()

// console.log(program.opts());

const PORT = program.opts().p;

const ENV = program.opts().e;

app.listen(PORT, () => console.log(`Server ok puerto ${PORT} env: ${ENV}`));
