const User = require('../models/user');

module.exports = {
    async getUser(req, res) {
        try {
            const users = await User.find(req.params);

            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                // .populate('thoughts');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.params.friendId }},
                { runValidators: true, new: true });

            if (!userData) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

  async deleteFriend(req, res) { 
    try {
        const userData = await User.findOneAndUpdate(
        { _id: req.params.userId},
        { $pull: { friends: req.params.friendId}},
        { runValidators: true, new: true });

        if (!userData) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
  },
};
