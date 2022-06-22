const mongoose = require('mongoose');

const authorModel = new mongoose.Schema( { 
    fname:{
        required: true,
        type: String
    }, 
    lname: {
        required: true,
        type: String
    }, 
    title:{
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    }, 
    email: {
        type: String,
        unique:true,
        required:true
    },
    password:{
        type: String, 
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Author', authorModel)