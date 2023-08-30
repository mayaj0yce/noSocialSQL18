const { User, Thought } = require('../models');

module.exports = {
//Thought is pulled in json format to allow easy reading 
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

//Using the GET method for one thought via id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought in this brain' });
            }

            res.json(post);
        } catch (err) {
            res.status(500).json(err)
        }
    },

//Creates a thought with POST 
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            // WHAT GOES HERE ?! (body)
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { posts: post._id } },
                { new: true }
            );
            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'Thought created, but no valid user ID' });
            }

            res.json('thought created! 🎉');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};

