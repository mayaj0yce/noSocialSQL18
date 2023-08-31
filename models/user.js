const { Schema, model } = require('mongoose');
const { thoughtSchema } = require('./thought');
// const { User } = require('.');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      max_length: 15,
      min_length: 5,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },

    friends:  {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
    //virtual friend count retrieves length of array field 
    // thoughts: [thoughtSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User',userSchema);
module.exports = User;