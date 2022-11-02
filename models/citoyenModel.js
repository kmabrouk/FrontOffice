const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitoyenSchema = new Schema({
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    cin: {
      type: String,
      required: true,
    },
    demandes: [{
        id : String,
        nom : String,
        procedure: String,
        procedureId: String
         }]
  });
  
module.exports = mongoose.model("Citoyen", CitoyenSchema);