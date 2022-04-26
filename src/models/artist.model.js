const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Artist", artistsSchema);
