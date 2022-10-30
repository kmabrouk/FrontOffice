var express = require("express");
var router = express.Router();
const demandeFuncs = require("../controllers/demandeController.js");

// import {
//   getDemandeById,
//   CreateDemande,
//   DeleteDemande,
// } from "../controllers/demandeController.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.route("/:id").get(demandeFuncs.getDemandeById).delete(demandeFuncs.DeleteDemande);
router.route("/create").post(demandeFuncs.CreateDemande);


module.exports = router;
