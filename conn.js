const mongoose = require("mongoose");
//const host = "mongodb+srv://" + user + ":mabrouk@cluster0.pdnsced.mongodb.net/?retryWrites=true&w=majority";
// const db = "frontoffice";
const host = "mongodb+srv://amine:amine@cluster0.pdnsced.mongodb.net/frontoffice?retryWrites=true&w=majority";
const {
  GridFsStorage
} = require("multer-gridfs-storage");

mongoose
  .connect(host)
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });

  let bucket;
mongoose.connection.on("connected", () => {
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
  console.log(bucket);
});
