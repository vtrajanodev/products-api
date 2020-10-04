const mongoose = require('mongoose');
const newUser = mongoose.model('newUser')



module.exports = {
    //mostrando todos os users (GET)
    async index(req , res){
       
        const { page = 1 } = req.query
        const getAll = await newUser.paginate({} , { page , limit: 10});

        return res.json(getAll);
    } ,

    async show(req, res){
        //Encontrar usuário pelo ID (GET)
        const showUsers = await newUser.findById(req.params.id)

        return res.json(showUsers)

    },

    async cadaster(req , res){
        //Cadastro de novo usuário (POST)
        const cadUser = await newUser.create(req.body)

        return res.json(cadUser)

    },

    
    async update(req , res){
        //atualização de novo usuário (PUT)
        const update = await newUser.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(update)
        },
        
    

        async del(req, res){
            //Deletando usuário (DELETE)    
        await newUser.findOneAndDelete(req.body)

        res.send('Usuário deletado!!')
        } 
    }

