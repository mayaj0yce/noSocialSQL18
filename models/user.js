const { Schema, model } = require('mongoose');
const { thoughtSchema } = require('./thought');
const { User } = require('.');

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
      type: DataTypes.STRING,
      require: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
    //virtual friend count retrieves length of array field 
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = User ;