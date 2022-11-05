let express = require("express");
const demandeFuncs = require("../controllers/demandeController.js");

let router = express.Router();


router.route("/").get(demandeFuncs.getDemandes);
router.route("/:id").get(demandeFuncs.getDemandeById).delete(demandeFuncs.DeleteDemande);
router.route("/").post(demandeFuncs.CreateDemande);
router.route("/:id").get(demandeFuncs.getDemandeById).put(demandeFuncs.modifyDemande);


module.exports = router;
