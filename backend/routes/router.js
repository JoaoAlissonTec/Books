const router = require('express').Router()

const booksRouter = require("./books")

router.use("/", booksRouter)

const authorsRouter = require("./authors")

router.use("/", authorsRouter)

module.exports = router