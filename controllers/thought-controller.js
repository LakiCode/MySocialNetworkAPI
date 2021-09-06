const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get thought and reaction by thought id
  getThoughtById({ params }, res) {
    thought
      .findOne({ _id: params.id })
      .populate({
        path: 'thought',
        select: '-__v',
      })
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v')
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create thought
  createThought({ body }, res) {
    thought
      .create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // update thought by id
  updateThought({ params, body }, res) {
    thought
      .findOneAndUpdate({ _id: params.id }, body, {
        new: true,
        runValidators: true,
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // delete thought
  deleteThought({ params }, res) {
    thought
      .findOneAndDelete({ _id: params.id })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  //  create reaction()
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reaction: body } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
