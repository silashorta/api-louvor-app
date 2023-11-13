const bodyParser = require("body-parser")

const integrantes = require("./integrantesRoute")
const repertorio = require("./repertoriosRoute")
const usuarios = require("./usuarios.Route")
const eventos = require("./eventos")

module.exports = app => {
    app.use(bodyParser.json())
    app.use(integrantes)
    app.use(repertorio)
    app.use(usuarios)
    app.use(eventos)
    app.get('/', (req, res) => res.send('Ola'))
}