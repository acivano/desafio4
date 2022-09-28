const { Router } = require('express')
const routerApi = Router()

const Containter = require('../container/container')

const ProductContainer = new Containter()

routerApi.get('/productos', (req,res) => {
    res.json(ProductContainer.getAll())
})

routerApi.get('/productos/:id', (req,res) => {
    res.json(ProductContainer.getById(parseInt(req.params.id)))
})

routerApi.post('/productos', (req,res) => {
    res.json(ProductContainer.save(req.body))
})

routerApi.put('/productos/:id', (req,res) => {

    res.json(ProductContainer.modifById(req.params.id, req.body) )
})

routerApi.delete('/productos/:id', (req,res) => {
    res.json(ProductContainer.deleteById(req.params.id))
})

module.exports = routerApi