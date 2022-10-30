var express = require("express");
var router = express.Router();
const procedureFuncs = require("../controllers/procedureController.js");

// import {
//   getProcedureById,
//   CreateProcedure,
//   DeleteProcedure,
// } from "../controllers/procedureController.js";


router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.route("/:id").get(procedureFuncs.getProcedureById).delete(procedureFuncs.DeleteProcedure);
router.route("/create").post(procedureFuncs.CreateProcedure);


module.exports = router;
