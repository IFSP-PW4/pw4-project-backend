const router = require("express").Router();

router.get("/userRegister", respondeRequisicao)
router.get("/userLogin",respondeRequisicao)
router.post("/userRegister", respondeRequisicao)
router.post("/userLogin",respondeRequisicao)
router.get("/",respondeRequisicao)

function respondeRequisicao(req,res){
    res.send("Voce está na rota "+req.url);
}

module.exports = router;

