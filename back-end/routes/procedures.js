let express = require("express");
let router = express.Router();
const procedureFuncs = require("../controllers/procedureController.js");



router.route("/").get(procedureFuncs.getProcedures);
router.route("/:id").get(procedureFuncs.getProcedureById).delete(procedureFuncs.DeleteProcedure);
router.route("/").post(procedureFuncs.CreateProcedure);
router.route("/:id").get(procedureFuncs.getProcedureById).put(procedureFuncs.modifyProcedure);


module.exports = router;
