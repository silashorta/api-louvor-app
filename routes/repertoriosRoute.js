const { Router } = require("express")

const RepertorioController = require("../controllers/repertorios")

const router = Router()


router.get("/repertorio", RepertorioController.pegaTodasAsMusicas)
router.get("/repertorio/:id", RepertorioController.PegaUmaMusica)
router.post("/repertorio", RepertorioController.criaMusica)
router.put("/repertorio/:id", RepertorioController.atualizaMusica)
router.delete("/repertorio/:id", RepertorioController.deletaMusica)


module.exports = router