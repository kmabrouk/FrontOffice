const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DemandeSchema = new Schema({
    nom: {
      type: String,
      required: true,
    },
    procedure: {
      type: String,
    },
    procedureId: {
      type: String,
    },
  });
  
module.exports = mongoose.model("Demande", DemandeSchema);