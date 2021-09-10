const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require('../../controllers/users-controller');

// Set up GET all and POST at /api/user
// /api/users
router.route('/').get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
// /api/user/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up post and DELETE at /api/users/:userId/friends/:friendId

router
  .route('/:userId/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
