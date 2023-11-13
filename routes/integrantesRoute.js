const { Router } = require("express")

const IntegrantesController = require("../controllers/Integrantes")

const router = Router()

router.get("/aniversariantes", IntegrantesController.pegaTodosOsIntegrantes)

router.get("/equipe", IntegrantesController.pegaTodosOsIntegrantes)
router.get("/equipe/:id", IntegrantesController.pegaUmIntegrante)
router.post("/equipe", IntegrantesController.criaIntegrante)
router.put("/equipe/:id", IntegrantesController.atualizaIntegrante)
router.delete("/equipe/:id", IntegrantesController.deletaIntegrante)

module.exports = router