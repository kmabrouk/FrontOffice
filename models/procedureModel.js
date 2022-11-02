const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProcedureSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  documents: [{
    nom_doc: {
      type: String
    }
  }]
});

module.exports = mongoose.model("Procedure", ProcedureSchema);