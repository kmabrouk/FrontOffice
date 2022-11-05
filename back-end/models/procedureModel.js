const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProcedureSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  documents: {
    type: [Buffer]
  }
});

module.exports = mongoose.model("Procedure", ProcedureSchema);