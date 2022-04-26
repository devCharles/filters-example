const express = require("express");
const artwork = require("../usecases/artwork.usecases");

const router = express.Router();

// Para listar y filtrar obras
// Este ejemplo soporta 2 query params:
// - type: el tipo de obra  puede ser sticker, mural o graffity como en el modelo
// - artist_id: El id del artista del que se quieren obtener las obras

// Ejemplo de posibles llamadas:
// GET /artworks -> esta responderia todas las obras de todos los artistas de todos los tipos
// GET /artworks?type=mural -> esta responderia todas las obras de tipo mural de todos los artistas
// GET /artworks?artist_id=12345 -> esta responderia a todas las de cualquier tipo del artista con el id "12345"
// GET /artworks?type=sticker&artist_id=12345 -> esta responderia con todas las obras de tipo sticker en las que el artista con id "12345" participo
router.get("/", async (request, response) => {
  // Tomamos type de los query params, en caso de no existir, type tendra un valor de undefined y no activara el filtro de tipo
  const type = request.query.type;

  // Tomamos artist_id de los query params, en caso de no existir, artistId tendra un valor de undefined y no activara el filtro de artista
  const artistId = request.query.artist_id;

  console.table(request.query);

  const filteredArtworks = await artwork.getFiltered(type, artistId);

  response.json({
    ok: true,
    data: {
      artworks: filteredArtworks,
    },
  });
});

// Para crear una nueva obra
router.post("/", async (request, response) => {
  const newArtwork = await artwork.create(request.body);

  response.json({
    ok: true,
    data: {
      artwork: newArtwork,
    },
  });
});

module.exports = router;
