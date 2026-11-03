// IMPORTACIONES
import express from 'express'

// CONFIGURACIONES
const api = express();
const port=3000;

// APIS
api.get('',(req, res)=>{
    res.send("lo que nos de la gana")
})


api.listen(port,()=>{
    console.log(`conectado a la url http://localhost:${port}`)
} )