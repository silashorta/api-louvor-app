const express = require("express")
const app = express()
const routes = require("./routes")
const cors = require("cors")

app.use(cors())

routes(app)

const porta = 21014

app.listen(porta, () => {
    console.log("rodando servidor na porta " + porta)
})

module.exports = app