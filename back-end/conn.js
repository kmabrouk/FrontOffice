const mongoose = require("mongoose");

const host = "mongodb+srv://amine:amine@cluster0.pdnsced.mongodb.net/frontoffice?retryWrites=true&w=majority";

mongoose
  .connect(host)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
