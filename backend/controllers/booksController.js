const {Books: BooksModel} = require('../models/Books')

const booksController = {

    create: async(req, res) => {
        try {
            
            const books = {
                title: req.body.title,
                ano_publicacao: req.body.ano_publicacao,
                author: req.body.author
            };

            const response = await BooksModel.create(books);

            res.status(201).json({response, msg: "Livro criado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const books = await BooksModel.find()

            res.json(books);
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res)=>{
        try {

            const id = req.params.id;
            const book = await BooksModel.findById(id);

            if(!book){
                res.status(404).json({msg: "Livro não encontrado."});
                return;
            }

            res.json(book);

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const book = await BooksModel.findById(id);

            if(!book){
                res.status(404).json({msg: "Livro não encontrado."});
                return;
            }

            const deleteBook = await BooksModel.findByIdAndDelete(id);

            res.status(200).json({deleteBook, msg: "Livro excluído com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            
            const id = req.params.id

            const books = {
                title: req.body.title,
                ano_publicacao: req.body.ano_publicacao,
                author: req.body.author
            };
            
            const updatedBook = await BooksModel.findByIdAndUpdate(id, books)
            
            if(!updatedBook){
                res.status(404).json({msg: "Livro não encontrado."});
                return;
            }

            res.status(200).json({books, msg: "Livro atualizado com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = booksController