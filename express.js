let express = require("express");
const moment = require("moment");
const PORT = 3001;
let app = express();

let visitas = 0;

const SERVER = app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT}`) );

// REQ(request) es lo que nos envia el front la peticion HTTP, RES(response) es la respuesta que enviamos Y NEXT es nuestro 
app.get("/", (req, res, next)=>{
    res.send(`<h1 style="color:blue;">Hola Lorenzo!</h1>`);;
})

app.post("/", (req, res, next)=>{
    res.send(`Estoy en el metodo ${req.method}`);;
})

app.put("/", (req, res, next)=>{
    res.send(`Estoy en el metodo ${req.method}`);;
})

app.delete("/", (req, res, next)=>{
    res.send(`Estoy en el metodo ${req.method}`);;
})

app.all("/", (req, res, next)=>{
    res.send(`Estoy en el método ALL DE EXPRESS`);;
})

app.get("/visitas", (req, res, next)=>{
    visitas++;
    res.send(`Total visitas ${visitas}`);;
})

app.get("/fyh", (req, res, next)=>{
    let hora = moment().format("L");
    res.json({hora});;
})

app.get("/estudiantes", (req, res, next)=>{
    res.send("Estoy en estudiantes!");;
})

SERVER.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})