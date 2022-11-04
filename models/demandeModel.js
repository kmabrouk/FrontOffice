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
    documents: [{
      nom: {
        type: String
      },
      doc: {
        type: String //!!!!!
      }
    }]
  });
  
module.exports = mongoose.model("Demande", DemandeSchema);