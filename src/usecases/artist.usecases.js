const Artist = require("../models/artist.model");

function create(artistData) {
  return Artist.create(artistData);
}

function getAll() {
  return Artist.find();
}

module.exports = {
  create,
  getAll,
};
