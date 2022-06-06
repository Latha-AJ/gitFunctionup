const booksModel =  require("../models/booksModel.js")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await booksModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await booksModel.find()
    res.send({msg: allBooks})
}

module.exports.createBooks= createBooks
module.exports.getBooksData= getBooksData