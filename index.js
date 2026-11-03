// IMPORTACIONES
import express from "express";
import { suma } from "./funciones.js";

// CONFIGURACIONES
const api = express();
const port = 3000;
// me permite leer el json de las peticiones y tambien responder con un json
api.use(express.json());
// APIS
api.get("", (req, res) => {
  res.send("lo que nos de la gana");
});

api.post("/user", (request, response) => {
  const numB = request.body.numB;
  response.send("hola " + suma(4, numB));
});

api.listen(port, () => {
  console.log(`conectado a la url http://localhost:${port}`);
});
