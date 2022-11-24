const mongoose = require("mongoose");

const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://localhost:27017/music-library", settings);

module.exports = mongoose;
