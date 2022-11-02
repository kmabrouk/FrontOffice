var express = require("express");
var router = express.Router();
const citoyenFuncs = require("../controllers/citoyenController.js");



router.route("/").get(citoyenFuncs.getCitoyens);
router.route("/:id").get(citoyenFuncs.getCitoyenById).delete(citoyenFuncs.DeleteCitoyen);
router.route("/").post(citoyenFuncs.CreateCitoyen);
router.route("/:id").get(citoyenFuncs.getCitoyenById).put(citoyenFuncs.modifyCitoyen);


module.exports = router;
