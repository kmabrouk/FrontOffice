const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let DemandeSchema = new Schema({
    nom: {
      type: String,
      required: true,
    },
    procedure: {
      type: String,
    },
    documents: {
      type: [String]
    }
  });
  
module.exports = mongoose.model("Demande", DemandeSchema);