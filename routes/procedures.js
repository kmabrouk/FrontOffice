var express = require("express");
var router = express.Router();
const procedureFuncs = require("../controllers/procedureController.js");

// import {
//   getProcedureById,
//   CreateProcedure,
//   DeleteProcedure,
// } from "../controllers/procedureController.js";



router.route("/").get(procedureFuncs.getProcedures);
router.route("/:id").get(procedureFuncs.getProcedureById).delete(procedureFuncs.DeleteProcedure);
router.route("/").post(procedureFuncs.CreateProcedure);


module.exports = router;
