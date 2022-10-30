const mongoose=require('mongoose');
const user = "amine";
const db = "frontoffice";
mongoose.connect("mongodb+srv://" + user + ":" + user + "@cluster0.pdnsced.mongodb.net/" + db
).then(()=>{
console.log("connection successful");
}).catch((e)=>{
console.log("No connection");
})