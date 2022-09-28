const express = require('express')

const app = express()
const routerApi = require('./src/routes/productos')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', routerApi)
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))