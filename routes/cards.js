const { router, readJson } = require("./utils.js");

router.get("/cards", (req, res) => {
  readJson("cards.json").then((cards) => {
    res.send(cards);
  });
});
