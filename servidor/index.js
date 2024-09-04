const express = require('express');

// Creamos servidor
const app = express();


// Definimos ruta
app.get('/',(req,res)=>{
  res.send('Hola Mundo')
})


app.listen(4000, () =>{
  console.log("El servidor esta corriendo");
})