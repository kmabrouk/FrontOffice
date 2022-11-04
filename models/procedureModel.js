const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProcedureSchema = new Schema({
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