const { Schema, model } = require('mongoose');
const userSchema = require('./user');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            min_length: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username
    },
    {
        toJSON: {
            getters: true,
        },
    }
)

module.exports = 
