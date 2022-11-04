let express = require("express");
const multer = require("multer");
const demandeFuncs = require("../controllers/demandeController.js");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadStorage = multer({ storage: fileStorageEngine });
let router = express.Router();


// Single file
router
  .route("/upload/single")
  .post(uploadStorage.single("file"), (req, res) => {
    console.log(req.file);
    return res.send("Single file");
  });

router.route("/").get(demandeFuncs.getDemandes);
router.route("/:id").get(demandeFuncs.getDemandeById).delete(demandeFuncs.DeleteDemande);
router.route("/").post(demandeFuncs.CreateDemande);
router.route("/:id").get(demandeFuncs.getDemandeById).put(demandeFuncs.modifyDemande);


module.exports = router;
