const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            max_length: 15,
        },
        first: {
            type: String,
            required: true,
            max_length: 50,
          },
          last: {
            type: String,
            required: true,
            max_length: 50,
          },
          email: {
            type:
          }
    }
)
username 

email 

thoughts 
id is referencing the Thought model 

friends 
 module.exports = users