const mongoose = require("mongoose");
//const host = "mongodb+srv://" + user + ":mabrouk@cluster0.pdnsced.mongodb.net/?retryWrites=true&w=majority";
// const db = "frontoffice";
const host = "mongodb+srv://amine:amine@cluster0.pdnsced.mongodb.net/frontoffice?retryWrites=true&w=majority";

mongoose
  .connect(host)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
