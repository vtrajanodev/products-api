const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const newUser = new mongoose.Schema({
    name: {
        type: String,
        
    },
    age: {
        type: Number,
       
    },
    sex:{
        type: String,
        
    },
    email:{
        type: String,
        
    },
    createdAt:{
        type: Date,
        default: Date.now

    }

})

newUser.plugin(mongoosePaginate)


mongoose.model('newUser' , newUser)