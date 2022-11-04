const Citoyen = require("../models/citoyenModel");

//@description     Fetch single citoyen
//@route           GET /api/citoyens/:id
//@access          Public
const getCitoyens = async (req, res) => {
  const citoyen = await Citoyen.find();
  if (citoyen) {
    return res.json(citoyen);
  } else {
    return res.status(404).json("Citoyens not found");
  }
};

const getCitoyenById = async (req, res) => {
  const citoyen = await Citoyen.findById(req.params.id);
  if (citoyen) {
    return res.json(citoyen);
  } else {
    return res.status(404).json("citoyen not found");
  }
};

//@description     Create single citoyen
//@route           POST /api/citoyens/create
//@access          Private
const CreateCitoyen = async (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const citoyen = new Citoyen({
      nom:body.nom,
      prenom:body.prenom,
      cin:body.cin,
      demandes:body.demandes,
    });
    const createdCitoyen = await citoyen.save();

    res.status(201).json(createdCitoyen);
  }
};

//@description     Modift single citoyen
//@route           PUT /api/citoyens/:id
//@access          Private
const modifyCitoyen = async (req, res) => {
  const citoyen = await Citoyen.findByIdAndUpdate(req.params.id, {nom: req.body.nom, prenom: req.body.prenom,
    cin: req.body.cin, demandes: req.body.demandes});
  if (citoyen) {
    return res.json(citoyen);
  } else {
    return res.status(404).json("Citoyen not found");
  }
};

//@description     Delete single citoyen
//@route           GET /api/citoyens/:id
//@access          Private
const DeleteCitoyen = async (req, res) => {
  const citoyen = Citoyen.findById(req.params.id);

  if (citoyen) {
    await citoyen.remove();
    res.json("Citoyen Removed");
  } else {
    res.status(404);
    throw new Error("Citoyen not Found");
  }
};

module.exports = { getCitoyens, getCitoyenById, CreateCitoyen, modifyCitoyen, DeleteCitoyen };
