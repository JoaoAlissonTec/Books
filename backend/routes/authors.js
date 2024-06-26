const router = require('express').Router()

const authorController = require("../controllers/authorsController")

router.route("/autores").post((req, res) => authorController.create(req, res));
router.route("/autores").get((req, res) => authorController.getAll(req, res));
router.route("/autores/:id").get((req, res) => authorController.get(req, res));
router.route("/autores/:id").delete((req, res) => authorController.delete(req, res));
router.route("/autores/:id").put((req, res) => authorController.update(req, res));

module.exports = router;