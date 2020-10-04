const express = require('express')

const routes = express.Router()

const ProductController = require('./controllers/ProductController');




// rota index
routes.get('/cadastro' , (req, res) => {
    res.render('index.html')
})


routes.get('/users' , ProductController.index)
routes.get('/users/:id' , ProductController.show)
routes.post('/cadastro' , ProductController.cadaster)
routes.put('/users/:id' , ProductController.update)
routes.delete('/users/:id' , ProductController.del)


module.exports = routes;
