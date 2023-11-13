const { Router } = require("express")

const UsuariosController = require("../controllers/usuarios")

const router = Router()

router.get("/cadastro", UsuariosController.pegaTodosOsUsuarios)
router.post("/cadastro", UsuariosController.criaUsuario)
router.post("/login", UsuariosController.login)

module.exports = router