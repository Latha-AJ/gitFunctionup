const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const booksSchema = new mongoose.Schema( {
    bookName: 
    {
        type: String,
        unique:true,
        required:true
    },

    authorName: String,

     category: {
    type: String,
        enum: ["Fiction", "Non Fiction","Action and Adventure", "Classics", "Comic Book or Graphic Novel", "Fantasy", "Horror"]
       },
       
     year: Number
}, { timestamps: true })

module.exports = mongoose.model('Books', booksSchema) 



