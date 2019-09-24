const express = require('express')
const app = express();

//Manejar las peticiones que haga a la direccion http://127.0.0.1:3000/
app.get("/",(req, res)=>{
    //console.log(req)/
    res.send("Hola Mundo")
  
    
})


//correr servidor
app.listen(3000,()=>{
    console.log("Server is running.......")
})
/*Para instalar las carpetas node_modules de un proyecto ponemos: npm install, sobre el la carpeta del proyecto*/
