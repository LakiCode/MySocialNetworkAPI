const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughts-controller');

// Set up GET all and POST at /api/Thoughts
// /api/Thoughtss
router.route('/').get(getAllThoughts).post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/Thoughts/:id
// /api/Thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// Set up post and DELETE at /api/Thoughts reactions

router
  .route('/:thoughtsId/:reactions')
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
