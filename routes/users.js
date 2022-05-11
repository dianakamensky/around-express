const { router, readJson } = require("./utils.js");

router.get("/users", (req, res) => {
  readJson("users.json").then((users) => {
    res.send(users);
  });
});

router.get("/users/:id", (req, res) => {
  readJson("users.json").then((users) => {
    const user = users.find((user) => user._id === req.params.id);
    if (!user) {
      res.status(404).send({ message: "User ID not found" });
    } else {
      res.send({ data: user });
    }
  });
});
