const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  // addThought,
  // removeThought,
} = require("../../controllers/userController");

console.log(getUsers);
console.log(getSingleUser);
console.log(createUser);
console.log(deleteUser);
// console.log(removeThought);

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:usertId/thoughts
// router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/users/:userId
// router.route("/:userId/thoughts/:thoughtId").delete(removeThought);

module.exports = router;
