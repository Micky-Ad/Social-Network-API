const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addThought,
  removeThought,
} = require("../../controllers/userController");

// /api/users for get and post user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId for getting a single user and deleteting
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// Update User
router.route("/updateUser/:userId").put(updateUser);

// /api/users/:usertId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/thouhhts/:thoughtId
router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;
