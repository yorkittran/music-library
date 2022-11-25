const mongoose = require("mongoose");

const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://localhost:27017/music-library", settings);
mongoose.set("debug", (collectionName, method, query) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query));
});

module.exports = mongoose;
