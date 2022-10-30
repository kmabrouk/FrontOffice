const mongoose = require("mongoose");
var Schema = mongoose.Schema;
// const Procedure = require("../models/procedureModel");

var DemandeSchema = new Schema({
    nom: {
      type: String,
      required: true,
    },
    procedure: {
      type: Schema.Types.ObjectId,
      ref:'Procedure'
    },
  });
  
module.exports = mongoose.model("Demande", DemandeSchema);