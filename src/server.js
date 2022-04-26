const express = require("express");
const cors = require("cors");

const artistsRouter = require("./routes/artist.router");
const artworksRouter = require("./routes/artwork.router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/artists", artistsRouter);
app.use("/artworks", artworksRouter);

module.exports = app;
