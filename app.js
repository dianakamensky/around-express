const { router } = require("./routes/utils.js");
const express = require("express");
const { PORT = 3000 } = process.env;
const app = express();
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
app.use("/", router);
require("./routes/cards");
require("./routes/users");
router.get("*", function (req, res) {
  res.status(404).send({ message: "Requested resource not found" });
});
