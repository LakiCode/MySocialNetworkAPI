const { Schema, model } = require('mongoose');
const ReactionSchema = require('./reaction');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Add some of yours Thought!',
    trim: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    uniqued: true,
    trim: true,
    required: 'Username is Required!',
  },
  reactions: [ReactionSchema],
});

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
