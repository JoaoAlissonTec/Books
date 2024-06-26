const mongoose = require('mongoose')

const { Schema } = mongoose;

const authorsSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    biografia: {
        type: String
    },
    ano_de_nascimento: {
        type: Date
    }
}, {timestamps: true})

const Authors = mongoose.model("Authors", authorsSchema)

module.exports = {
    Authors,
    authorsSchema
};