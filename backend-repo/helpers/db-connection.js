const mongoose = require("mongoose");
const env = require("../config/config");
const strConn = "mongodb://localhost:27017/sampleApp";

// Connect to DBongodb
mongoose
  .connect(env.db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection to cloud database established!"))
  .catch((err) => console.log("[ERROR] DB connection failed", err));

module.exports = mongoose.connection;
