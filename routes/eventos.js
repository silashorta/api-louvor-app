const { Router } = require("express");
const EventosController = require("../controllers/eventos");
const router = Router();

router.get("/eventos", EventosController.pegaTodosOsEventos);
router.get("/eventos/:id", EventosController.pegaUmEvento);
router.post("/eventos", EventosController.criaEvento);
router.put("/eventos/:id", EventosController.atualizaEvento);
router.delete("/eventos/:id", EventosController.deletaEvento);

module.exports = router;