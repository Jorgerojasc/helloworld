const express = require('express')
const app = express();
const arreglo = []
const json = {}
//Manejar las peticiones que haga a la direccion http://127.0.0.1:3000/
app.get("/:nombre/:edad",(req, res)=>{
    //console.log(req)/
    res.send("Hola Mundo")
    //arreglo.push(req.params.id)/
    json.nombre = req.params.nombre
    json.edad = req.params.edad
    console.log(json.nombre+":"+json.edad)
    console.log(req.params.nombre+":"+req.params.edad)
    
})


//correr servidor
app.listen(3000,()=>{
    console.log("Server is running.......")
})
/*Para instalar las carpetas node_modules de un proyecto ponemos: npm install, sobre el la carpeta del proyecto*/

