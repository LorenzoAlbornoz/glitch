const Container = require('./main') // Importing Container class
const products = new Container('products.txt') // Create new instance of class Container
const PORT = process.env.PORT || 3001


const express = require('express')
const app = express()

const server = app.listen(PORT , ()=> {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})

app.get('/productos', async (req, res) => {
    const allProducts = await products.getAll()
    res.send(allProducts)
})
app.get('/productoRandom', async (req, res) => {
    const product = await products.getRandom()
    res.send(product)
})
app.get('*', (req, res) => {
    res.send('<h1 style="display:flex;justify-content:center;color:red;text-align:center">Bienvenido!!!</h1>')
})
server.on('error', error => {
    console.error(`Error en el servidor. ${error}`)
})