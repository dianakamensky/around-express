const { router } = require("./utils");
const {
  getUsers,
  getUser,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users.js");

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.patch("/users/me", updateProfile);

router.patch("/users/me/avatar", updateAvatar);
