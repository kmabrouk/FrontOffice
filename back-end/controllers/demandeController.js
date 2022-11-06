const Demande = require("../models/demandeModel");

//@description     Fetch single Demande
//@route           GET /api/demandes/:id
//@access          Public
const getDemandes = async (req, res) => {
  const demande = await Demande.find();
  if (demande) {
    return res.json(demande);
  } else {
    return res.status(404).json("Demandes not found");
  }
};

const getDemandeById = async (req, res) => {
  const demande = await Demande.findById(req.params.id);
  if (demande) {
    return res.json(demande);
  } else {
    return res.status(404).json("Demande not found");
  }
};

//@description     Create single demande
//@route           POST /api/demandes/create
//@access          Private
const CreateDemande = async (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const demande = new Demande({
      nom:body.nom,
      procedure:body.procedure,
      ownerCIN: body.ownerCin,
      documents: body.documents
    });
    const createdDemande = await demande.save();

    res.status(201).json(createdDemande);
  }
};

//@description     Modift single demande
//@route           PUT /api/demandes/:id
//@access          Private
const modifyDemande = async (req, res) => {
  const demande = await Demande.findByIdAndUpdate(req.params.id, {nom: req.body.nom, procedure: req.body.procedure,
    documents: req.body.documents});
  if (demande) {
    return res.json(demande);
  } else {
    return res.status(404).json("Demande not found");
  }
};

//@description     Delete single demande
//@route           GET /api/demandes/:id
//@access          Private
const DeleteDemande = async (req, res) => {
  const demande = Demande.findById(req.params.id);

  if (demande) {
    await demande.remove();
    res.json("Demande Removed");
  } else {
    res.status(404);
    throw new Error("Demande not Found");
  }
};

module.exports = {getDemandes, getDemandeById, CreateDemande, modifyDemande, DeleteDemande };
