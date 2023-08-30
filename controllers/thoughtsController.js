const { User, Thought } = require('../models');

module.exports = {
    //Thought is pulled in json format to allow easy reading 
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Using the GET method for one thought via id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that Id number' });
            }
            res.json(thought);

        } catch (err) {
            res.status(500).json(err)
        }
    },

    //Creates a thought with POST 
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)

            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //delete thought

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove(
                { _id: req.params.thoughtId }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that Id number' });
            }
            res.json({ message: 'Thought was deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that Id number' });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
};
