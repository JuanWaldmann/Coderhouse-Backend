const express = require('express')
const fs = require('fs')
const app = express()
const Contenedor = require("./index.js")
const nuevoProducto = new Contenedor("./productos.txt")
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor prendido escuchando el puerto: ${PORT}`)
})

//rutas

app.get('/', (req, res)=>{
    res.send({ mensaje: `BIENVENIDO`})
})
app.get('/productos', (req, res)=>{
    res.send(fs.readFileSync("./productos.txt", "utf8"))
})
app.get('/productoRandom', (req, res)=> {
    res.send(nuevoProducto.getRandomProduct())
})
server.on('error', (err) => console.error(err))


