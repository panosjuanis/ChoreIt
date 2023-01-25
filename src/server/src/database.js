const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017";

mongoose.set('strictQuery', false);
mongoose
  .connect(URI, {useNewUrlParser: true})
  .then((db) => console.log("Mongo db is connected!"))
  .catch((err) => console.error(err));


module.exports = mongoose;