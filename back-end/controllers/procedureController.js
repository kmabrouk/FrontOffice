const Procedure = require("../models/procedureModel");

//@description     Fetch Procedure
//@route           GET /api/procedures/
//@access          Public
const getProcedures = async (req, res) => {
  const procedure = await Procedure.find();
  if (procedure) {
    return res.json(procedure);
  } else {
    return res.status(404).json("Procedures not found");
  }
};

const getProceduresByName = async (req, res) => {
  console.log(req.params.nom);
  const procedure = await Procedure.find({nom: req.params.nom});
  if (procedure) {
    return res.json(procedure);
  } else {
    return res.status(404).json("Procedures not found");
  }
};

const getProcedureById = async (req, res) => {
  const procedure = await Procedure.findById(req.params.id);
  if (procedure) {
    return res.json(procedure);
  } else {
    return res.status(404).json("procedure not found");
  }
};

//@description     Create single Procedure
//@route           POST /api/procedures/create
//@access          Private
const CreateProcedure = async (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const proc = new Procedure({
      nom:body.nom,
      documents:body.documents
    });

    const createdProc = await proc.save();

    res.status(201).json(createdProc);
  }
};

//@description     Modift single procedure
//@route           PUT /api/procedures/:id
//@access          Private
const modifyProcedure = async (req, res) => {
  console.log(req.body);
  const procedure = await Procedure.findByIdAndUpdate(req.params.id, {nom: req.body.nom});
  if (procedure) {
    return res.json(procedure);
  } else {
    return res.status(404).json("Procedure not found");
  }
};

//@description     Delete single Procedure
//@route           GET /api/Procedures/:id
//@access          Private
const DeleteProcedure = async (req, res) => {
  const procedure = Procedure.findById(req.params.id);

  if (procedure) {
    await procedure.remove();
    res.json("Procedure Removed");
  } else {
    res.status(404);
    throw new Error("Procedure not Found");
  }
};

module.exports = { getProcedures, getProcedureById, getProceduresByName, CreateProcedure, modifyProcedure, DeleteProcedure };
