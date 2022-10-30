const mongoose=require("mongoose");
var Schema = mongoose.Schema;
var ProcedureSchema=new Schema({
    nom:{
    type:String,
    required:true,
    unique:true
    }
})
var DemandeSchema=new Schema({
    nom:{
    type:String,
    required:true,
    unique:true
    },
    procedure:{
    type:ProcedureSchema,
    required:true,
    unique:true
    },
})
module.exports = mongoose.model('Procedure', ProcedureSchema);
module.exports = mongoose.model('Demande', DemandeSchema);