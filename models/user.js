const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
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
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts',
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'friends',
    },
  ],
});

const User = model('User', UserSchema);

module.exports = User;
