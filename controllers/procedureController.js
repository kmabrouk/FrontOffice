const Procedure = require("../models/procedureModel");

//@description     Fetch single Procedure
//@route           GET /api/procedures/:id
//@access          Public
const getProcedures = async (req, res) => {
  const procedure = await Procedure.find();
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
    return;
  } else {
    const proc = new Procedure({
      nom:body.nom,
    });

    const createdProc = await proc.save();

    res.status(201).json(createdProc);
  }
};

//@description     Delete single Procedure
//@route           GET /api/Procedures/:id
//@access          Private
const DeleteProcedure = async (req, res) => {
  const proc = await Procedure.findById(req.params.id);

  if (procedure) {
    await proc.remove();
    res.json("Procedure Removed");
  } else {
    res.status(404);
    throw new Error("Procedure not Found");
  }
};

module.exports = { getProcedures, getProcedureById, CreateProcedure, DeleteProcedure };
