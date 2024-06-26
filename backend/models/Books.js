const mongoose = require('mongoose')

const { Schema } = mongoose

const {authorsSchema} = require('./Authors')

const booksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ano_publicacao:{
        type: Date,
    },
    author: {
        type: authorsSchema
    }
}, {timestamps:true})

const Books = mongoose.model("Books", booksSchema)

module.exports = {
    Books
}