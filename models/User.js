const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      uniqued: true,
      trim: true,
      required: 'Username is Required!',
    },
    email: {
      type: String,
      unique: true,
      required: 'E-mail address is Required!',
      match: [/.+@.+\..+/, 'email address is not valid!'],
    },
    Thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});
const user = model('user', UserSchema);

module.exports = user;
