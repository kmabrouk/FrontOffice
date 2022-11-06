const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DemandeSchema = new Schema({
    nom: {
      type: String,
      required: true
    },
    procedure: {
      type: String
    },
    ownerCIN: {
      type: String
    },
    documents: {
      type: [Buffer]
    }
  });
  
module.exports = mongoose.model("Demande", DemandeSchema);