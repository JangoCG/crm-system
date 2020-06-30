const mongoose = require('mongoose');
const { MONGO_DB_URL } = require('./config');

module.exports = mongoose
  .connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));
