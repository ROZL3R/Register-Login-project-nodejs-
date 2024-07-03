const mongoose = require('mongoose');

mongoose.connect('')
.then(()=> {
    console.log('connected to the database')
})
.catch(() => {
    console.log('connection failed')
})

const loginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    }
})

const loginCollection = new mongoose.model('loginCollection',loginSchema)

module.exports = loginCollection


