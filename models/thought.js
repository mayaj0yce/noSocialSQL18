const { Schema, model } = require('mongoose');
const Reaction = require('./reaction')

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
        userName: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);


// thoughtSchema
//   .virtual('getResponses')
//   // Getter
//   .get(function () {
//     return this.responses.length;
//   });

// Initialize our Video model

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


