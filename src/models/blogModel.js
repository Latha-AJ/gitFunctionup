const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogModel = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    authorId: {
        type: ObjectId,
        ref: "Author",
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: { type: [String] },
        isDeleted: {
        type: Boolean,
        default: false
    }, publishedAt:  {  
        type : Date, default: Date.now 
    } ,
    isPublished: 
    {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('blogs', blogModel)

