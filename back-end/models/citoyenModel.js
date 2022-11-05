const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CitoyenSchema = new Schema({
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
    password: {
      type: String,
      required: true,
      select: false
    },
    demandes: [{
        id : String,
        nom : String,
        procedure: String,
        procedureId: String
         }]
  });
  
module.exports = mongoose.model("Citoyen", CitoyenSchema);