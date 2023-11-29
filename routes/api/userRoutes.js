const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  // updateUser,
  // deleteUser,
  // createFriend,
  // deleteFriend,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);
// .put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
// router.route("/:userId/friends").post(createFriend).delete(deleteFriend);
module.exports = router;
