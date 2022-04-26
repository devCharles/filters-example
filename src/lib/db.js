const mongoose = require("mongoose");

const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

function connect() {
  return mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
  );
}

module.exports = {
  connect,
};
