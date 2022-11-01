var express = require("express");
var router = express.Router();
const demandeFuncs = require("../controllers/demandeController.js");

// import {
//   getDemandeById,
//   CreateDemande,
//   DeleteDemande,
// } from "../controllers/demandeController.js";

/* GET users listing. */
router.route("/").get(demandeFuncs.getDemandes);
router.route("/:id").get(demandeFuncs.getDemandeById).delete(demandeFuncs.DeleteDemande);
router.route("/").post(demandeFuncs.CreateDemande);


module.exports = router;
