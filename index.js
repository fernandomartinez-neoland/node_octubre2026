// IMPORTACIONES
import express from "express";
import { suma } from "./funciones.js";

// CONFIGURACIONES
const api = express();

// esta configuracion permite leer las peticiones como un json y tambien permite devolver un json
api.use(express.json());

// APIs
api.post("/", (req, res) => {
  console.log(req.body);

  res.send(suma(8, req.body.numB));
});

api.get("/multiplicar", (req, res) => {
  const { a, b } = req.query;
  const mult = a * b;
  res.send(`aqui tienes a A: ${a} y aqui tienes a B: ${b} y su multiplicacion es: ${mult}`);
});

api.get("/usuarios/:id", (req, res)=>{
  res.status(403).send( { "idUsuario": req.params.id, "estado": "Activo" })
})

api.listen(3000, () => {
  console.log("conectado a la url http://localhost:3000");
});
