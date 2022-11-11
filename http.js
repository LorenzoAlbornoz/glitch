const HTTP = require("http");
let moment = require("moment");
const PORT = 3001;

const SERVER = HTTP.createServer((request, response)=>{
    let hora = moment().add(4, 'h').hour();
    let mensaje = "Buenas noches";
    if(hora >= 6 && hora <= 12) mensaje = "Buenos días!";
    if(hora >= 13 && hora <= 19) mensaje = "Buenas tardes!";
    response.end(`${mensaje}`);
});

let connectedServer = SERVER.listen(PORT, ()=>{ 
    console.log(`Server on http://localhost:${PORT}`); 
});

connectedServer.on("error", error => console.log(error));