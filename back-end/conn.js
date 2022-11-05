const mongoose = require("mongoose");

const host =
  "mongodb+srv://root:0000@cluster0.pstfsvt.mongodb.net/frontoffice?retryWrites=true&w=majority";

mongoose
  .connect(host)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
