require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");

const PORT = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.log("DB CONNECTED");
    server.listen(PORT, () => {
      console.info(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("ERROR while connecting to DB: ", error);
  });
