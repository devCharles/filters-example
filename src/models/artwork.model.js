const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["sticker", "mural", "graffity"],
    required: true,
  },
  artists: {
    type: [mongoose.Types.ObjectId],
    ref: "Artist",
  },
});

module.exports = mongoose.model("Artwork", artworkSchema);
