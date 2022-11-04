let express = require("express");
let router = express.Router();
const citoyenFuncs = require("../controllers/citoyenController.js");



router.route("/").get(citoyenFuncs.getCitoyens);
router.route("/:id").get(citoyenFuncs.getCitoyenById).delete(citoyenFuncs.DeleteCitoyen);
router.route("/").post(citoyenFuncs.CreateCitoyen);
router.route("/:id").get(citoyenFuncs.getCitoyenById).put(citoyenFuncs.modifyCitoyen);


module.exports = router;
