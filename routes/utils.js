const router = require("express").Router();
const fsPromises = require("fs").promises;
const path = require("path");

module.exports = {
  router,
  readJson: (jsonFile) => {
    return fsPromises
      .readFile(path.join("data", jsonFile))
      .then((data) => JSON.parse(data));
  },
};
