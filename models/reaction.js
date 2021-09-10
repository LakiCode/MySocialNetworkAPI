const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: 'Add some of yours reactions???!!',
      trim: true,
      maxlength: 280,
    },

    username: {
      type: String,
      uniqued: true,
      trim: true,
      required: 'Username is Required!',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = ReactionSchema;
