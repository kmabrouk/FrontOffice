const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProcedureSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Procedure", ProcedureSchema);