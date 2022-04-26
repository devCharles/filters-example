const express = require("express");
const artist = require("../usecases/artist.usecases");

const router = express.Router();

// Para listar todos los artistas
router.get("/", async (request, response) => {
  const allArtists = await artist.getAll();

  response.json({
    ok: true,
    data: {
      artists: allArtists,
    },
  });
});

// Para crear un nuevo artista
router.post("/", async (request, response) => {
  const newArtist = await artist.create(request.body);

  response.json({
    ok: true,
    data: {
      artist: newArtist,
    },
  });
});

module.exports = router;
