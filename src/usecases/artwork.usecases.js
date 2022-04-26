const Artwork = require("../models/artwork.model");

function create(artworkData) {
  return Artwork.create(artworkData);
}

function getFiltered(type, artistId) {
  // Declaramos un objeto que albergara los filtros necesarios
  // Dependiendo de que parametros recibimos, vamos a ir declarando filtros
  let filters = {};

  // Si recibimos un type como argumento de esta funcion, agregamos la propiedad type al objeto de filtros
  if (type != null) {
    filters.type = type;
  }

  // Si recibimos un artistId como argumento de esta funcion, agregamos la propiedad artistId al objeto de filtros
  if (artistId != null) {
    // Dado que la propiedad "artists" en el modelo de artwork alberga un arreglo de los artistas que colaboraron en la obra
    // Necesitamos usar el operado "$in" para buscar dentro del arreglo el valor que necesitamos
    // Documentación: https://www.mongodb.com/docs/manual/reference/operator/query/in/#mongodb-query-op.-in
    filters.artists = { $in: [artistId] };
  }

  // En caso de que no recibamos ni type ni artistId el metodo find regresa todos los objetos, ya que el objeto de filtros estara vacio
  return Artwork.find(filters);
}

module.exports = {
  create,
  getFiltered,
};
