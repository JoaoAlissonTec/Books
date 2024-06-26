const {Authors: AuthorsModel} = require("../models/Authors")

const authorsController = {
    create: async (req, res) => {
        try {
            
            const author = {
                nome: req.body.nome,
                biografia: req.body.biografia,
                ano_de_nascimento: req.body.ano_de_nascimento
            }

            const response = await AuthorsModel.create(author)

            res.status(201).json({response, msg: "Autor criado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const authors = await AuthorsModel.find();

            res.json(authors)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id
            const author = await AuthorsModel.findById(id)

            if(!author){
                res.status(404).json({msg: "Autor não encontrado."})
                return;
            }

            res.json(author)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const author = await AuthorsModel.findById(id)

            if(!author){
                res.status(404).json({msg: "Autor não encontrado."})
                return;
            }

            const deletedAuthor = await AuthorsModel.findByIdAndDelete(id);

            res.status(200).json({deletedAuthor, msg: "Autor excluído com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const author = {
                nome: req.body.nome,
                biografia: req.body.biografia,
                ano_de_nascimento: req.body.ano_de_nascimento
            }

            const updatedAuthor = await AuthorsModel.findByIdAndUpdate(id, author)

            if(!updatedAuthor){
                res.status(404).json({msg: "Autor não encontrado."})
                return;
            }

            res.status(200).json({author, msg: "Autor atualizado com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = authorsController