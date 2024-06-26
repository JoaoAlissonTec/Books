const router = require('express').Router()

const booksController = require("../controllers/booksController")

router.route("/books").post((req, res) => booksController.create(req, res));

router.route("/books").get((req, res) => booksController.getAll(req, res));

router.route("/books/:id").get((req, res) => booksController.get(req, res));

router.route("/books/:id").delete((req, res) => booksController.delete(req, res));

router.route("/books/:id").put((req, res) => booksController.update(req, res));

module.exports = router;