// Requisitando o express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//Iniciando aplicação
const app = express()
app.use(express.json())
app.use(cors())

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);



// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi' , 
{useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false })

requireDir('./src/models/')


//Rotas
app.use('/api' , require('./src/routes'))




// rota index form

app.listen(3001);




