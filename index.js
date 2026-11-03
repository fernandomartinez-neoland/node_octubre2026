import express from 'express'

const api = express();

api.get('',(req, res)=>{
    res.send("lo que nos de la gana")
})


api.listen(3000,()=>{
    console.log("conectado a la url http://localhost:3000")
} )