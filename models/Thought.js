const { Schema, model } = require('mongoose');
const ReactionSchema = require('./reaction');

const Thoughtschema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Add some of yours thoughts!',
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
      required: 'Username is required!',
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

Thoughtschema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const thoughts = model('thoughts', Thoughtschema);

module.exports = thoughts;
