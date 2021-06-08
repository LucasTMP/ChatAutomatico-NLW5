import express, { json } from "express";
import routes from "./routes";

const app = express();
app.listen(3333, ()=> console.log("O servidor está rodando na porta 3333"));
app.use(express.json());
app.use(routes);



